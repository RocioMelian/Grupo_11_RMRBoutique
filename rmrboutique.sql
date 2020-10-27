CREATE DATABASE  IF NOT EXISTS `rmrboutique` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `rmrboutique`;
-- MariaDB dump 10.17  Distrib 10.4.14-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: rmrboutique
-- ------------------------------------------------------
-- Server version	10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `remito` int(11) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUsuarios_idx` (`id_usuario`),
  KEY `idProductos_idx` (`id_producto`),
  CONSTRAINT `idProductos` FOREIGN KEY (`id_producto`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idUsuarios` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'hombre'),(2,'mujer'),(3,'niño'),(4,'niña');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `talle` int(10) unsigned NOT NULL,
  `price` int(10) unsigned NOT NULL,
  `discount` int(10) unsigned NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idCategoria_idx` (`id_categoria`),
  CONSTRAINT `idCategoria` FOREIGN KEY (`id_categoria`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Campera Jazmin','Campera 100% Algodón','camperaniñas.jpg',3,600,15,4,NULL,NULL),(2,'Campera Nico','Campera 100% Algodón','camperaniño.jpg',2,800,50,3,NULL,NULL),(3,'Falda Valeria','Falda Elegante','faldamujer.jpg',1,1500,70,2,NULL,NULL),(4,'Falda Ivana','Super comoda','faldamujer2.jpg',3,700,25,2,NULL,NULL),(5,'Falda Victoria','Falda elegante','faldamujer3.jpg',2,2900,50,2,NULL,NULL),(6,'Jeans Matias','Jeans Elegantes','jeanshombre.jpg',3,1600,30,1,NULL,NULL),(7,'Jeans Ezequiel','Jeans super comodos','jeanshombre2.jpg',3,2000,50,1,NULL,NULL),(8,'Jeans Leo','Jeans Elegantes','jeanshombre2.jpg',1,2000,70,1,NULL,NULL),(9,'Jeans Maria','Jeans super comodos','jeansmujer.jpg',3,2500,10,2,NULL,NULL),(10,'Jeans Oriana','Jeans comodos','jeansmujer2.jpg',3,2500,10,2,NULL,NULL),(11,'Jeans Romina','Jeans elegantes','jeansmujer3.jpg',1,2000,50,2,NULL,NULL),(12,'Jeans Ciro','Para vivir jugando','jeansniño.jpg',1,650,10,3,NULL,NULL),(13,'Polera Luca','Polera manga larga','mangalarganiño.jpg',2,500,30,3,NULL,NULL),(14,'Polera Ludmila','Polera manga larga','mangalarganiña.jpg',3,1500,50,4,NULL,NULL),(15,'Calzas Mellizas','Pack de dos calzas','packdoscalzasniña.jpg',2,800,10,4,NULL,NULL),(16,'Joggins Rama','100% algodon','pantalonhombre.jpg',5,500,10,1,NULL,NULL),(17,'Joggins Martin','100% algodon','pantalonhombre2.jpg',2,2000,50,1,NULL,NULL),(18,'Remera Emanuel','100 % algodon','remerahombre.jpg',1,800,5,1,NULL,NULL),(19,'Remera Gabi','algodon','remerahombre2.jpg',5,1000,20,1,NULL,NULL),(20,'Remera Anahi','algodon','remeramujer.jpg',3,500,50,2,NULL,NULL),(21,'Remera Viviana','Algodon','remeramujer2.jpg',2,600,10,2,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ramiro','Cano','ramiro2000z.rc@gmail.com','123456','admin','avatar-1601401302837.jpg',NULL,NULL),(2,'pan','queso','panconqueso@gmail.com','123456','user','avatar-1601403354308.jpg',NULL,NULL),(3,'Rocio','Melian','apaacomelian@gmail.com','123456','admin','avatar-1601604071711.jpg',NULL,NULL),(4,'matius','martinez','matu.memg@gmail.com','123456','user','avatar-1601608439686.jpg',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-27 19:29:24
