import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private _userRespository: Repository<User>){}

  async create(createUserDto: CreateUserDto) {
    const user = await this._userRespository.create(createUserDto);
    const result = await this._userRespository.save(user);
    return result ;
  }

  findAll() {
    return this._userRespository.find();
  }

  async findOne(id: number) {
    return await this._userRespository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    
    const user = await this._userRespository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    const editedUser = Object.assign(user, updateUserDto);
    const  result = await this._userRespository.save<User>(editedUser);
    return result;
  }

  async remove(id: number) {
    return await this._userRespository.delete(id);
  }
}
