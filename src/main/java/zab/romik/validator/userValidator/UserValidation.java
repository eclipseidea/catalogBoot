package zab.romik.validator.userValidator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import zab.romik.dao.UserDao;
import zab.romik.entity.User;
import zab.romik.validator.Validator;

/**
 * Created by ROMIK on 29.05.2017.
 */

@Component
public class UserValidation implements Validator {

    @Autowired
    private UserDao userDao;

    @Override
    public void validate(Object o) throws Exception {
        User user = (User) o;
        if(user.getName().isEmpty()){
            throw new UserException(UserValidationMessages.EMPTY_USER_NAME_FIELD);
        }else if(userDao.findByName(user.getName())!=null){
            throw new UserException(UserValidationMessages.USERNAME_ALREADY_EXIST);
        }
    }
}
