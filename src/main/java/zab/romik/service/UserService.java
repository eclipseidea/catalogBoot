package zab.romik.service;

import zab.romik.entity.User;

import java.util.List;

public interface UserService {

    void save(User user) throws Exception;

    List<User> findAll();

    User findOne(long id);

    void delete(long id);

    void update(User user);

}
