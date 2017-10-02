package zab.romik.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zab.romik.domain.entities.Orders;
import zab.romik.domain.entities.User;
import zab.romik.domain.repositories.OrdersDao;
import zab.romik.domain.service.OrdersService;

import java.util.List;

@Service
public class OrdersServiceImpl implements OrdersService {

    @Autowired
    private OrdersDao ordersDao;

    public void save(Orders order) {
        ordersDao.save(order);
    }

    public List<Orders> findAll() {
        return ordersDao.findAll();
    }

    public Orders findOne(long id) {
        return ordersDao.findOne(id);
    }

    public void delete(long id) {
        ordersDao.delete(id);
    }

    public void update(Orders order) {
        ordersDao.save(order);
    }

    public void addUserToOrder(Orders order, User user) {
        order.setUser(user);
        ordersDao.save(order);
    }

    public void removeUserFromOrder(Orders order) {
        order.setUser(null);
    }
}
