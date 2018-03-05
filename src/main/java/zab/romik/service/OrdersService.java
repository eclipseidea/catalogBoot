package zab.romik.service;

import zab.romik.entity.Orders;
import zab.romik.entity.User;

import java.util.List;

public interface OrdersService {

    void save(Orders order);

    List<Orders> findAll();

    Orders findOne(long id);

    void delete(long id);

    void update(Orders order);

    void addUserToOrder(Orders order, User user);

    void removeUserFromOrder(Orders order);


}

