package zab.romik.domain.service;

import zab.romik.domain.entities.User;

import java.util.List;

public interface UserService {
    void save(User user) throws Exception;

    List<User> findAll();

    User findOne(long id);

    void delete(long id);

    void update(User user);
}
