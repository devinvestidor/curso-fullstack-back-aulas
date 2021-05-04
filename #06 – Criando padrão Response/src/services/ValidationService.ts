import { Types } from 'mongoose';

class ValidationService {
  public validateId(id: string): boolean {
    if (!Types.ObjectId.isValid(id)) {
      return true;
    }
    return false;
  }
}

export default new ValidationService();
