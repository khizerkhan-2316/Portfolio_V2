import { createContext, useContext } from 'react';
import Experinces from '../Helpers/experinces';

const ExperinceContext = createContext(Experinces);

export const ExperinceProvider = ({ children }) => {
  const value = Experinces;

  return (
    <ExperinceContext.Provider value={value}>
      {children}
    </ExperinceContext.Provider>
  );
};

export const useExperinces = () => {
  const context = useContext(ExperinceContext);

  if (!context) {
    throw new Error('useExperinces must be used within ExperincesProvider');
  }

  return context;
};
