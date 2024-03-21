import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUsersDto } from '../dto/create-users.dto';
import { UsersModule } from 'src/users/users.module';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    saltOrRounds: number = 10;

    constructor(public usersService: UsersService, CreateUsersDto: any) {}
        private apiKeys: string[] = JSON.parse(process.env.API_KEYS_JSON_STRING)
        validateApiKey(apiKey: string) {
            console.log(apiKey == this.apiKeys[1]);
            return this.apiKeys.find(apiK => apiKey === apiK)
        }

    async signIn( //email, pass) {
        username: string, 
        pass: string): Promise<any> {
        const user =  await this.usersService.findOne(pass);
        if(user?.password !== pass) {
            const isMatch = bcrypt.compare(pass, user?.password);
   
            if (!isMatch) {
                throw new UnauthorizedException();
        }
    

const payload = {sub: user.username, email: user.email, password: user.password };

 return {
    apiKeys: await this.apiKeys
};
        }
        }
async signUp(payload: CreateUsersDto) {
    // const user = await this.usersService.findOne(username)
    const hashPass = await bcrypt.hash(payload.password, this.saltOrRounds);

    let data = {
        payload,
        password: hashPass
    }
 //const user = await this.usersService.findOne(data);
   // return user;
}
    }
