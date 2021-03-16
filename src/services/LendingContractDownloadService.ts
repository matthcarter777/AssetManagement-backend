import path from 'path';
import mime from 'mime';

import { AppError } from './../Errors/AppError';


class LendingContractDownloadService {
  async execute(id: string) {

    const file = path.join(__dirname, `contracts/${id}.pdf`);

    const filename = await path.basename(file);
    const mimetype = await mime.lookup(file);

    if(!file) {
      throw new AppError('File not already exist!');
    };

    const res = {
      filename,
      mimetype
    }
    
    return;
  }

}

export default LendingContractDownloadService;