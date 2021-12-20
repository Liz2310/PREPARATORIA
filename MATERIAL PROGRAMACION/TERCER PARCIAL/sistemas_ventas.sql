-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 28-05-2020 a las 07:11:39
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemas_ventas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categoria`
--

CREATE TABLE `Categoria` (
  `Id_categoria` int(11) NOT NULL,
  `Categoria` varchar(50) NOT NULL,
  `Descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Cliente`
--

CREATE TABLE `Cliente` (
  `RFC` varchar(13) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Direccion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Direccion`
--

CREATE TABLE `Direccion` (
  `Calle` varchar(50) NOT NULL,
  `Numero` int(11) NOT NULL,
  `Id` int(11) NOT NULL,
  `Colonia` varchar(50) NOT NULL,
  `Ciudad` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Producto`
--

CREATE TABLE `Producto` (
  `Id_producto` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Precio` double NOT NULL,
  `Stock` int(11) NOT NULL,
  `RFC_proveedor` varchar(13) NOT NULL,
  `Id_Categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Proveedor`
--

CREATE TABLE `Proveedor` (
  `RFC` varchar(13) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Pagina_web` varchar(100) NOT NULL,
  `Direccion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tel_Contacto`
--

CREATE TABLE `Tel_Contacto` (
  `Id` int(11) NOT NULL,
  `Telefono` int(11) NOT NULL,
  `Cliente` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Venta`
--

CREATE TABLE `Venta` (
  `Id_venta` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Cliente` varchar(13) NOT NULL,
  `Descuento` double NOT NULL,
  `Monto_final` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Venta_Producto`
--

CREATE TABLE `Venta_Producto` (
  `Id_venta` int(11) NOT NULL,
  `Id_producto` int(11) NOT NULL,
  `Precio_producto` double NOT NULL,
  `Cantidad_vendida` int(11) NOT NULL,
  `Total_producto` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Categoria`
--
ALTER TABLE `Categoria`
  ADD PRIMARY KEY (`Id_categoria`);

--
-- Indices de la tabla `Cliente`
--
ALTER TABLE `Cliente`
  ADD PRIMARY KEY (`RFC`),
  ADD KEY `fk_Cliente_Direccion` (`Direccion`);

--
-- Indices de la tabla `Direccion`
--
ALTER TABLE `Direccion`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `Producto`
--
ALTER TABLE `Producto`
  ADD PRIMARY KEY (`Id_producto`),
  ADD KEY `fk_Producto_Categoria` (`Id_Categoria`),
  ADD KEY `fk_Producto_Proveedor` (`RFC_proveedor`);

--
-- Indices de la tabla `Proveedor`
--
ALTER TABLE `Proveedor`
  ADD PRIMARY KEY (`RFC`),
  ADD KEY `fk_Proveedor_Direccion` (`Direccion`);

--
-- Indices de la tabla `Tel_Contacto`
--
ALTER TABLE `Tel_Contacto`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `fk_Tel_Contacto_Cliente` (`Cliente`);

--
-- Indices de la tabla `Venta`
--
ALTER TABLE `Venta`
  ADD PRIMARY KEY (`Id_venta`),
  ADD KEY `fk_Venta_Cliente` (`Cliente`);

--
-- Indices de la tabla `Venta_Producto`
--
ALTER TABLE `Venta_Producto`
  ADD KEY `fk_Venta_Producto_Venta` (`Id_venta`),
  ADD KEY `fk_Venta_Producto_Producto` (`Id_producto`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Cliente`
--
ALTER TABLE `Cliente`
  ADD CONSTRAINT `fk_Cliente_Direccion` FOREIGN KEY (`Direccion`) REFERENCES `Direccion` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Producto`
--
ALTER TABLE `Producto`
  ADD CONSTRAINT `fk_Producto_Categoria` FOREIGN KEY (`Id_Categoria`) REFERENCES `Categoria` (`Id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Producto_Proveedor` FOREIGN KEY (`RFC_proveedor`) REFERENCES `Proveedor` (`RFC`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Proveedor`
--
ALTER TABLE `Proveedor`
  ADD CONSTRAINT `fk_Proveedor_Direccion` FOREIGN KEY (`Direccion`) REFERENCES `Direccion` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Tel_Contacto`
--
ALTER TABLE `Tel_Contacto`
  ADD CONSTRAINT `fk_Tel_Contacto_Cliente` FOREIGN KEY (`Cliente`) REFERENCES `Cliente` (`RFC`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Venta`
--
ALTER TABLE `Venta`
  ADD CONSTRAINT `fk_Venta_Cliente` FOREIGN KEY (`Cliente`) REFERENCES `Cliente` (`RFC`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Venta_Producto`
--
ALTER TABLE `Venta_Producto`
  ADD CONSTRAINT `fk_Venta_Producto_Producto` FOREIGN KEY (`Id_producto`) REFERENCES `Producto` (`Id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Venta_Producto_Venta` FOREIGN KEY (`Id_venta`) REFERENCES `Venta` (`Id_venta`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
