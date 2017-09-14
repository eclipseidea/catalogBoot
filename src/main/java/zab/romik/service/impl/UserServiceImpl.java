package zab.romik.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import zab.romik.dao.OrdersDao;
import zab.romik.dao.UserDao;
import zab.romik.entity.Orders;
import zab.romik.entity.User;
import zab.romik.service.UserService;
import zab.romik.validator.Validator;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    @Qualifier("userValidation")
    private Validator validator;

    @Autowired
    private UserDao userDao;

    @Autowired
    private OrdersDao ordersDao;

    public void save(User user) throws Exception {
        validator.validate(user);
        userDao.save(user);
    }


    public List<User> findAll() {
        return userDao.findAll();
    }


    public User findOne(long id) {
        return userDao.findOne(id);
    }

    public void delete(long id) {
        User user = userDao.findOne(id);
        List<Orders> orders = user.getOrders();
        for (Orders ord : orders) {
            ord.setUser(null);
            ordersDao.save(ord);
        }
        userDao.delete(id);
    }

    public void update(User user) {
        userDao.save(user);
    }
}
