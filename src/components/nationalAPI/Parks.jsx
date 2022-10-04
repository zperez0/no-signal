import React, { useEffect, useState } from "react";
import StatePark from "./StatePark";

// compass icon

const Parks = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedParks, setSelectedParks] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [defaultParks, setDefaultParks] = useState([]);


  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_API_KEY}&limit=50`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json();
        }
      })
      .then((jsonifiedResponse) => {
        const parksArray = [];
        for (let i = 0; i < 6; i++) {
          parksArray.push(
            jsonifiedResponse.data[
              Math.floor(Math.random() * jsonifiedResponse.data.length)
            ]
          );
        }
        setDefaultParks(parksArray);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });
  }, []);

  // const fetchParks = (stateCode = null) => {
  //   // fetch by state
  //   fetch(
  //     `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}=&api_key=${process.env.REACT_APP_API_KEY}`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`${response.status}: ${response.statusText}`);
  //       } else {
  //         return response.json();
  //       }
  //     })
  //     .then((jsonifiedResponse) => {
  //       setSelectedParks(jsonifiedResponse.data);
  //       setSelectedState(stateCode);
  //       console.log(stateCode)
  //     });
  // };

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    //loading icon/animation?
    return <h1>...Loading...</h1>;
  } else {
    return (
      <>
        <h1>National Parks</h1>
        <div className= "grid lg:grid-cols-3 gap-2">
          {defaultParks.map((park, index) => (
            <div key={index}>
                <div className="flex justify-center">
                  <div className="mb-4 rounded-lg shadow-lg bg-white max-w-sm">
                    <img
                      className="rounded-t-lg"
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">
                        {park.fullName}
                      </h5>
                      <p className="text-gray-700 text-base mb-4">
                        {park.description}
                      </p>
                      <button
                        type="button"
                        className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        View Park
                      </button>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Parks;



// ----------------------------------

// import React, { useEffect, useState } from "react";
// // import StatePark from "./StatePark";
// import StateForm from "./StateForm.jsx";
// import ParksDisplay from "./ParksDisplay"
// import { auth } from "../../firebase";

// // compass icon

// const Parks = () => {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [selectedParks, setSelectedParks] = useState([]);
//   const [selectedState, setSelectedState] = useState("");
//   const [defaultParks, setDefaultParks] = useState([]);

//   const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);


  

//   useEffect(() => {
//     fetch(
//       `https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_API_KEY}&limit=50`
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`${response.status}: ${response.statusText}`);
//         } else {
//           return response.json();
//         }
//       })
//       .then((jsonifiedResponse) => {
//         const parksArray = [];
//         for (let i = 0; i < 4; i++) {
//           parksArray.push(
//             jsonifiedResponse.data[
//               Math.floor(Math.random() * jsonifiedResponse.data.length)
//             ]
//           );
//         }
//         setDefaultParks(parksArray);
//         setIsLoaded(true);
//       })
//       .catch((error) => {
//         setError(error);
//         setIsLoaded(true);
//       });
//   }, []);

//   const fetchParks = () => {
//     const stateCode = [
//       "AL",
//       "AK",
//       "AS",
//       "AZ",
//       "AR",
//       "CA",
//       "CO",
//       "CT",
//       "DE",
//       "DC",
//       "FM",
//       "FL",
//       "GA",
//       "GU",
//       "HI",
//       "ID",
//       "IL",
//       "IN",
//       "IA",
//       "KS",
//       "KY",
//       "LA",
//       "ME",
//       "MH",
//       "MD",
//       "MA",
//       "MI",
//       "MN",
//       "MS",
//       "MO",
//       "MT",
//       "NE",
//       "NV",
//       "NH",
//       "NJ",
//       "NM",
//       "NY",
//       "NC",
//       "ND",
//       "MP",
//       "OH",
//       "OK",
//       "OR",
//       "PW",
//       "PA",
//       "PR",
//       "RI",
//       "SC",
//       "SD",
//       "TN",
//       "TX",
//       "UT",
//       "VT",
//       "VI",
//       "VA",
//       "WA",
//       "WV",
//       "WI",
//       "WY",
//     ];
//     // fetch by state
//     fetch(
//       `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}=&api_key=${process.env.REACT_APP_API_KEY}`
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`${response.status}: ${response.statusText}`);
//         } else {
//           return response.json();
//         }
//       })
//       .then((jsonifiedResponse) => {
//         setSelectedParks(jsonifiedResponse.data);
//         setSelectedState(stateCode);
//         fetchParks(selectedState);
//         console.log(stateCode);
//       });
//   };

//   // const onStateChange = (event) => {
//   //   const getStateid = event.target.value;
//   //   setSelectedState(fetchParks);
//   //   event.preventDefault();
//   //   console.log(getStateid);
//   // };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   fetchingParks(selectedState);
//   // };

//   // if (auth.currentUser == null) {
//   //   return (
//   //     <React.Fragment>
//   //       <h1>You must be signed in to access the queue.</h1>
//   //     </React.Fragment>
//   //   );
//   // } else if (error) {
//   //   return <h1>Error: {error}</h1>;
//   // } else if (!isLoaded) {
//   //   //loading icon/animation?
//   //   return <h1>...Loading...</h1>;
//   // } else if (auth.currentUser != null) {
//   //   let currentlyVisibleState = null;

//     // if (error) {
//     //   currentlyVisibleState = <p>There was an error: {error}</p>;
//     // } else if (selectedState) {
//     //   currentlyVisibleState = (
//     //     <StateForm state={selectedState} onStateSelect={fetchParks} />
//     //   );
//     // } else {

//     //   let currentlyVisibleState = null;
//     // } else if (formVisibleOnPage){
//     //     currentlyVisibleState = (
//     //       <StateForm state={selectedState} onStateSelect={fetchParks} />
//     //     );
//     //   }
//     let currentlyVisibleState = null;

//       if (error) {
//             return <h1>Error: {error}</h1>;
//           } else if (!isLoaded) {
//             //loading icon/animation?
//             return <h1>...Loading...</h1>;
//           } else if (formVisibleOnPage){
//             currentlyVisibleState = (
//               <StateForm state={selectedState} onStateSelect={fetchParks} />
//             );
//           } else {
//             currentlyVisibleState = (
//               <ParksDisplay defaultParks={defaultParks} />
//             );
//       return (
//         <>
//           {currentlyVisibleState}
//          </>
//       );
//     }
//   };

// export default Parks;