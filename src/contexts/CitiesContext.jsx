import { createContext, useContext, useEffect, useReducer } from "react";

// const URL = "http://localhost:9000";

const CitiesContext = createContext();

const cities = [
  {
    cityName: "Lucknow",
    country: "India",
    emoji: "INDIA FLAG",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
    position: {
      lat: 26.755420897359123,
      lng: 80.96923828125001,
    },
    id: 1,
  },
  {
    cityName: "Raghogarh",
    country: "India",
    emoji: "INDIAN FLAG",
    date: "2027-07-15T08:22:53.976Z",
    notes: "My College",
    position: {
      lat: 24.435350591995437,
      lng: 77.16316223144533,
    },
    id: 2,
  },
];

const initialState = {
  cities: cities,
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown Action Type !");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(
    function () {
      async function fetchCities() {
        dispatch({ type: "loading" });
        try {
          dispatch({ type: "cities/loaded", payload: cities });
        } catch {
          dispatch({
            type: "rejected",
            payload: "There was an error loading the cities data !!!",
          });
        }
      }
      fetchCities();
    },
    [cities]
  );
  function generateUniqueId() {
    const timestamp = new Date().getTime();

    return `${timestamp}`;
  }

  async function getCity(id) {
    // if (Number(id) === currentCity.id) return; //to ensure that if we load the same city again then it will instantaneous as it will not fetch the data from the api again
    dispatch({ type: "loading" });
    try {
      id = Number(id);
      const data = cities.find((city) => city.id === id);
      if (data) {
        dispatch({ type: "city/loaded", payload: data });
      } else {
        dispatch({ type: "rejected", payload: `City with ID ${id} not found` });
      }
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the city data !!!",
      });
    }
  }
  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      newCity.id = generateUniqueId();
      dispatch({ type: "city/created", payload: newCity });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error adding the city data !!!",
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      id = Number(id);
      const updatedCities = cities.filter((city) => city.id !== id);

      dispatch({ type: "city/deleted", payload: id });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error removing the city data !!!",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
        error,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}
export { CitiesProvider, useCities };
