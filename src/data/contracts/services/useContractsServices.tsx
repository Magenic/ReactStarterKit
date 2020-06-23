import {useFetch} from 'lib/hooks';
import {Contract} from 'data/contracts/models';
import {
  getContractsAxiosConfig,
  getContractByContractNumberAxiosConfig,
  getContractsByContractNumbersAxiosConfig,
} from 'data/contracts/services';

export const useContractsServices = () => {
  const getContracts = useFetch<Contract[]>(getContractsAxiosConfig);
  const getContractByContractNumber = useFetch<Contract>(
    getContractByContractNumberAxiosConfig
  );
  const getContractsByContractNumbers = useFetch<Contract[]>(
    getContractsByContractNumbersAxiosConfig
  );
  return {
    getContracts,
    getContractByContractNumber,
    getContractsByContractNumbers,
  };
};

export default useContractsServices;
