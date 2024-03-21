import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy) {
constructor(private UsersService: UsersService) {
super({ header: 'apiKey', prefix: '' }, 
true, (apikey, done, req) => {
const checkKey = UsersService.validateApiKey(apikey);
if (!checkKey) {
return done(false);
}
return done(true);
});
}
}