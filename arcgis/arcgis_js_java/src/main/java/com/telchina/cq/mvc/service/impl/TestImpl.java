package com.telchina.cq.mvc.service.impl;

import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.telchina.cq.mvc.entity.test;
import com.telchina.cq.mvc.mapper.TestMapper;
import com.telchina.cq.mvc.service.TestService;
import org.springframework.stereotype.Service;

@Service
public class TestImpl extends ServiceImpl<TestMapper, test> implements TestService {
}
