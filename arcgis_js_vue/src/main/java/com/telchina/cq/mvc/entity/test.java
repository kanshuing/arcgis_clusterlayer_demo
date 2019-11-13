package com.telchina.cq.mvc.entity;

import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * 用于存储角色或权限的值
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("YW_SCJG_QYDZDTDW")
public class test extends Model<test> {

	@Override
	protected Serializable pkVal() {
		return null;
	}

	@TableField("dgs_bzgpsjd")
	private String dgsBzgpsjd;
	@TableField("dgs_bzgpswd")
	private String dgsBzgpswd;
}
