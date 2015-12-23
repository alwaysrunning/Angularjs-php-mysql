-- phpMyAdmin SQL Dump
-- version 2.11.6
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2015 年 12 月 23 日 06:04
-- 服务器版本: 5.0.51
-- PHP 版本: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `db_database18`
--

-- --------------------------------------------------------

--
-- 表的结构 `tb_affiche`
--

CREATE TABLE `tb_affiche` (
  `id` int(4) NOT NULL auto_increment,
  `title` varchar(200) character set gb2312 NOT NULL,
  `content` mediumtext character set gb2312 NOT NULL,
  `createtime` datetime NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=68 ;

--
-- 导出表中的数据 `tb_affiche`
--

INSERT INTO `tb_affiche` (`id`, `title`, `content`, `createtime`) VALUES
(8, '为提高编程者的编程水平,特推出视频讲解!', '互动媒体学习社区网为提高编程者的编程水平，特推出50个项目的视频讲解！对源码程序进行剖析！', '2008-04-01 14:14:38'),
(25, '《PHP项目开发全程实录》即将出版啦！', '广大的读者朋友您好，《PHP项目开发全程实录》08年4月中旬即将出版发行！敬请关注！', '2008-04-02 09:37:43'),
(2, 'Happy Every Day', 'Every day ! in Every Day! I am getting better and better!ddddddd', '2008-04-02 15:41:45'),
(43, '真的好想你', '真的好想你真的好想你真的好想你', '2015-12-16 07:29:39'),
(44, '修改主题', '就杀敌发斯蒂芬就杀敌发斯蒂芬就杀敌发斯蒂芬就杀敌发斯蒂芬', '2015-12-16 07:34:01');
