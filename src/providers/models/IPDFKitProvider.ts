import ILendingContractPDF from '../dto/ILendingContractPDF';

export default interface IPDFKitProvider {
  generateContract(lendingContract: ILendingContractPDF): Promise<string>; 
}