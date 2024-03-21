import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUsersDto } from 'src/dto/create-users.dto';
// import { UsersSchema } from './schema/users.schema';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { ApiKey } from 'nestjs-api-keys';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async createUsers(@Body() body: any) {
const { username, email, password } = body;
const saltOrRounds = 12
const hashedPassword = await bcrypt.hash(password, saltOrRounds)

    return await this.usersService.createUsers({
username,
email,
password: hashedPassword
    });

  }
  @Post('login')
  // async findOne(@Body('username') username: string): Promise<UsersService> {
  //   return await this.usersService.findOne(username);
//  }
 async create(@Body('email') email: string): Promise<UsersService> {
  return await this.usersService.findOne(email)
 }
  async find(@Body('password') password: string): Promise<UsersService> {
    return await this.usersService.findOne(password);
  }
  private apiKeys: string[] = [
    'a03na188ame03u1d78620de67282882a84',
    '2e621a6646a4211768cd68e26f21228a81',
    ];
  validateApiKey(apiKey: string) {
      console.log(apiKey == this.apiKeys[1]);
      return this.apiKeys.find(apiK => apiKey === apiK)
  }

async signIn( //email, pass) {
  email: string, 
  pass: string): Promise<any> {
  const user =  await this.usersService.findOne(pass);
  if(user?.password !== pass) {
      const isMatch = bcrypt.compare(pass, user?.password);

      if (!isMatch) {
          throw new BadRequestException('Invalid Credential');
  }


const payload = {sub: user.username, email: user.email, password: user.password };

return {
apiKeys: await this.apiKeys
};
  }
  }
async signUp(payload: CreateUsersDto) {
  const users = await this.usersService.findOne('email')
// const hashPass = await bcrypt.hash(payload.password, this.saltOrRounds);

let data = {
  payload,

}
//const user = await this.usersService.findOne(data);
// return user;
}
}
export class AppModule {}