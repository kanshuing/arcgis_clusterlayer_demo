package com.telchina.cq.mvc.mapper;

import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.telchina.cq.mvc.entity.test;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface TestMapper extends BaseMapper<test> {
}
