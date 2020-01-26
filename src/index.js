import * as bcrypt from 'bcryptjs';
import * as cryptojs from 'crypto-js';


export function GetHashPwd(username, password) {
    let salt = '$2a$12$' + String(cryptojs.SHA256('Janusec' + username + password)).substring(0,22);
    let hashpwd = bcrypt.hashSync(password, salt);
    return hashpwd;
}

window.GetHashPwd = GetHashPwd;