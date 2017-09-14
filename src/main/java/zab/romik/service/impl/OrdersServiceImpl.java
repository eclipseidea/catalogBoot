package zab.romik.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zab.romik.dao.OrdersDao;
import zab.romik.entity.Orders;
import zab.romik.entity.User;
import zab.romik.service.OrdersService;

import java.util.List;

@Service
public class OrdersServiceImpl implements OrdersService {

    @Autowired
    private OrdersDao ordersDao;
//	@Autowired
//	private  CommodityDao commodityDao;


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


//	public void addCommodityToOrder(Orders order, Orders_Commodity commodity) {
//		order.getOrders_Commodity().add(commodity);
//		ordersDao.save(order);
//	}


    public void removeUserFromOrder(Orders order) {
        order.setUser(null);
    }
}
