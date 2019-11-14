package com.telchina.cq.mvc.controller;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.telchina.cq.config.mvc.MVCResult;
import com.telchina.cq.mvc.entity.test;
import com.telchina.cq.mvc.service.TestService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test")
@Slf4j
public class TestController {

	/**
	 * 测试
	 */
	@Autowired
    TestService testService;

	@RequestMapping("/test")
	public MVCResult test() {
		List<test> result = testService.selectList(new EntityWrapper<test>().last(" where rownum<= 1000"));
		return MVCResult.succ("test").data(result);
	}
}
