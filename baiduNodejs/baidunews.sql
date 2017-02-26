-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Feb 07, 2017 at 03:57 AM
-- Server version: 5.5.49-log
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(2, '精选', '新闻标题', 'img/1.png', '2017-01-14 00:00:00', '1234567'),
(3, '精选', '新闻232', 'img/2.png', '2017-01-05 00:00:00', '12345'),
(4, '精选', '111111', 'img/3.png', '2017-01-22 00:00:00', '1111'),
(5, '百家', '百家新闻1111', 'img/4.png', '2017-01-25 00:00:00', '百家000'),
(6, '百家', '百家新闻2222', 'img/5.png', '2017-01-08 00:00:00', '百家2222'),
(7, '本地', '本地新闻1111', 'img/1.png', '2017-01-29 00:00:00', '本地112222'),
(8, '本地', '本地新闻2222', 'img/2.png', '2017-01-29 00:00:00', '本地112222'),
(9, '本地', '本地新闻3333', 'img/3.png', '2017-01-29 00:00:00', '本地11333'),
(10, '本地', '本地新闻4', 'img/4.png', '2017-01-29 00:00:00', '本地4'),
(11, '本地', '本地新闻5', 'img/5.png', '2017-01-29 00:00:00', '本地5'),
(12, '娱乐', '娱乐新闻1', 'img/5.png', '2017-01-29 00:00:00', '娱乐1'),
(13, '社会', '社会新闻1', 'img/2.png', '2017-01-17 00:00:00', '社会1'),
(14, '社会', '社会新闻2', 'img/3.png', '2017-01-17 00:00:00', '社会2'),
(15, '社会', '社会新闻3', 'img/5.png', '2017-01-17 00:00:00', '社会3'),
(16, '军事', '军事新闻1', 'img/1.png', '2017-01-17 00:00:00', '军事1'),
(17, '军事', '军事新闻2', 'img/5.png', '2017-01-08 00:00:00', '军事2'),
(18, '精选', 'aha修改', 'img/1.png', '2017-02-03 00:00:00', 'sasasasa'),
(27, '百家', '插入新闻测试', 'img/5.png', '2017-02-03 00:00:00', '插入新闻'),
(28, '娱乐', '插入新闻2', 'img/4.png', '2017-02-19 00:00:00', 'charu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=29;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
