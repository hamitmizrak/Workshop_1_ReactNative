// IMPORT
// Context Create
import {createContext, useContext} from 'react';

// Context Oluşturmak
const CounterContextCreate = createContext();

///////////////////////////////////////////////////////
// export: dış dünyaya açmak
export const CounterContextProvider = ({children}) => {
  // Context Api Provider Bileşeni
  const infoValue = {
    info: 'Context api geldi ve sayaç uygulaması,',
  }; // end value

  // return
  return (
    <CounterContextCreate.Provider value={infoValue}>
      {children}
    </CounterContextCreate.Provider>
  ); //end return
}; // end CounterContextProvider

/////////////////////////////////////////////////////
// Customize Hooks
export const useCounterContext = () => {
  return useContext(CounterContextCreate);
};
