package com.telchina.cq;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@MapperScan({ "com.telchina.cq.mvc.mapper" })
public class CqApplication  extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(CqApplication.class, args);
    }

    //TODO:发布版本
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(CqApplication.class);
    }
}
