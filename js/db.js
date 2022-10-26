const cars = [
	{
		image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/05/19052022-PORTADA-BMW-Serie-3-Touring-2023.jpg',
		brand: 'BMW',
		model: 'Series 3',
		year: 2020,
		price: 30000,
		doors: 4,
		color: 'Blue',
		transmission: 'automatic',
	},
	{ 
		image: 'https://autosdeprimera.com/wp-content/uploads/2021/06/bugatti-chiron-super-sport-2021-a.jpg',
        brand: 'Bugatti', 
        model: 'Chiron', 
        year: 2021, 
        price: 950000, 
        doors: 2, 
        color: 'White', 
        transmission: 'automatic' 
    },
	{ 
		image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/05/20190515-AUDI-A4-2020-02.jpg',
        brand: 'Audi', 
        model: 'A4', 
        year: 2020, 
        price: 40000, 
        doors: 4, 
        color: 'Gray', 
        transmission: 'automatic' 
    },
	{
		image: 'https://noticias.coches.com/wp-content/uploads/2013/12/Ford-Mustang-2015-10.jpg',
		brand: 'Ford',
		model: 'Mustang',
		year: 2015,
		price: 20000,
		doors: 2,
		color: 'Red',
		transmission: 'automatic'
	},
	{ 
		image: 'https://i.ytimg.com/vi/8op7fkSFh2w/maxresdefault.jpg',
        brand: 'Audi', 
        model: 'A6', 
        year: 2020, 
        price: 35000, 
        doors: 4, 
        color: 'Gray', 
        transmission: 'automatic' 
    },
	{
		image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2016/10/20161021-BMW-SERIE-5-2017-01.jpg',
		brand: 'BMW',
		model: 'Series 5',
		year: 2016,
		price: 70000,
		doors: 4,
		color: 'Gray',
		transmission: 'automatic'
	},
	{
		image: 'https://i.ytimg.com/vi/arTjZvNTf6g/maxresdefault.jpg',
		brand: 'Mercedes Benz',
		model: 'Class C',
		year: 2015,
		price: 25000,
		doors: 4,
		color: 'Gray',
		transmission: 'automatic'
	},
	{
		image: 'https://www.diariomotor.com/imagenes/2018/05/ferrari-sp38-one-off-p.jpg',
		brand: 'Ferrari',
		model: 'F-40',
		year: 2020,
		price: 95000,
		doors: 2,
		color: 'Red',
		transmission: 'automatic'
	},
	{
		image: 'https://img.motoryracing.com/noticias/portada/20000/20368-n.jpg',
		brand: 'Chevrolet',
		model: 'Camaro',
		year: 2018,
		price: 60000,
		doors: 2,
		color: 'White',
		transmission: 'manual'
	},
	{
		image: 'https://img.youtube.com/vi/1TjMn-7x8Q0/maxresdefault.jpg',
		brand: 'Ferrari',
		model: 'Enzo',
		year: 2014,
		price: 80000,
		doors: 2,
		color: 'Red',
		transmission: 'manual'
	},
	{ 
		image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2018/11/20181126-CHEVROLET-CAMARO-SS-2019-COLOMBIA-PRECIO-CARACTERISTICAS-01.jpg',
        brand: 'Ford', 
        model: 'Mustang', 
        year: 2019, 
        price: 80000, 
        doors: 2, 
        color: 'Blue', 
        transmission: 'manual' 
    },
	{
		image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2020/07/Portada-12.jpg',
		brand: 'Dodge',
		model: 'Challenger',
		year: 2020,
		price: 40000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		image: 'https://i.ytimg.com/vi/tAJihuKEYC0/maxresdefault.jpg',
        brand: 'Audi', 
        model: 'A3', 
        year: 2017, 
        price: 55000, 
        doors: 2, 
        color: 'Gray', 
        transmission: 'manual' 
    },
	{ 
		image: 'https://s1.cdn.autoevolution.com/images/news/gallery/ferrari-stallone-concept-is-the-perfect-hypercar-of-the-future_10.jpg',
        brand: 'Ferrari', 
        model: 'Stallone', 
        year: 2021, 
        price: 92000, 
        doors: 2, 
        color: 'Red', 
        transmission: 'automatic' 
    },
	{ 
		image: 'https://1.bp.blogspot.com/-t3SRRAti7rg/W_A33JWGqnI/AAAAAAAAa7o/vp9PTmASa0IqmV-7W3j6baETASsP8DAxQCLcBGAs/s1600/Ficha-T%25C3%25A9cnica-Lamborghini-Veneno-Roadster.jpg',
        brand: 'Lamborghini', 
        model: 'Veneno', 
        year: 2018, 
        price: 83000, 
        doors: 2, 
        color: 'Red', 
        transmission: 'automatic' 
    },
	{
		image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/cms/uploads/eKnK3QQHyrmj8oUVLgCg',
		brand: 'Dodge',
		model: 'Challenger',
		year: 2020,
		price: 25000,
		doors: 2,
		color: 'Blue',
		transmission: 'manual'
	},
	{
		image: 'https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/a47d6a2ca8b9938a9c5f198b57f948ef',
		brand: 'Mercedes Benz',
		model: 'Class C',
		year: 2018,
		price: 45000,
		doors: 4,
		color: 'Gray',
		transmission: 'automatic'
	},
	{
		image: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/11/5-secretos-bmw-serie-3-2019.jpg?itok=Rr5KdStJ',
		brand: 'BMW',
		model: 'Series 5',
		year: 2019,
		price: 90000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		image: 'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/51935/bugatti-chiron_sport-2019-1600-01.jpg',
        brand: 'Bugatti', 
        model: 'Veyron', 
        year: 2021, 
        price: 90000, 
        doors: 2, 
        color: 'Red', 
        transmission: 'automatic' 
    },
	{ 
		image: 'https://blog.dupontregistry.com/wp-content/uploads/2017/05/lamborghini-gallardo-522017-1-1.jpg',
        brand: 'Lamborghini', 
        model: 'Gallardo', 
        year: 2017, 
        price: 65000, 
        doors: 2, 
        color: 'White', 
        transmission: 'manual' 
    },
	{ 
		image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2017/05/20170530-FORD-MUSTANG-GT-PREMIUM-2017-COLOMBIA-PRUEBA-TEST-DRIVE-01.jpg',
        brand: 'Ford', 
        model: 'Mustang', 
        year: 2017, 
        price: 60000, 
        doors: 2, 
        color: 'Red', 
        transmission: 'manual' 
    },
	{
		image: 'https://www.cnet.com/a/img/resize/a610d0d28b9e1438d8e4d2a93ee959f06d8252bc/hub/2015/05/15/5375be6b-6c09-435c-8bc1-343c511cac96/2015dodgechargerrt-37.jpg?auto=webp&fit=crop&height=675&width=1200',
		brand: 'Dodge',
		model: 'Challenger',
		year: 2015,
		price: 35000,
		doors: 2,
		color: 'Black',
		transmision: 'automatic'
	},
	{
		image: 'https://cdn.dealeraccelerate.com/fusion/1/638/26338/1920x1440/2013-lamborghini-aventador-2dr-cpe',
		brand: 'Lamborghini',
		model: 'Aventador',
		year: 2013,
		price: 50000,
		doors: 2,
		color: 'White',
		transmision: 'manual'
	},
	{
		image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/07/20190711-BMW-SERIE-3-2019-330I-SPORT-LINE-PRUEBA-DE-MANEJO-COLOMBIA-02.jpg',
		brand: 'BMW',
		model: 'Series 3',
		year: 2018,
		price: 50000,
		doors: 4,
		color: 'Black',
		transmission: 'automatic'
	},
	{ 
		image: 'https://i.pinimg.com/originals/dd/78/51/dd7851e15542cbd9ef1e626492417f0e.jpg',
        brand: 'Lamborghini', 
        model: 'Murciélago', 
        year: 2016, 
        price: 78000, 
        doors: 2, 
        color: 'Red', 
        transmission: 'manual' 
    },
	{ 
		image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2020/03/Portada-39.jpg',
        brand: 'Bugatti', 
        model: 'Veyron', 
        year: 2022, 
        price: 1000000, 
        doors: 2, 
        color: 'Blue', 
        transmission: 'automatic' 
    },
	{
		image: 'https://noticias.coches.com/wp-content/uploads/2016/10/BMW-Serie-5-Luxury-Line-2017-39.jpg',
		brand: 'BMW',
		model: 'Series 5',
		year: 2012,
		price: 80000,
		doors: 4,
		color: 'Blue',
		transmission: 'automatic'
	},
	{
		image: 'https://carnovo.com/wp-content/uploads/2018/03/mercedes-clase-c-2018-1200x900.jpg',
		brand: 'Mercedes Benz',
		model: 'Class C',
		year: 2018,
		price: 40000,
		doors: 4,
		color: 'Black',
		transmission: 'automatic'
	},
	{
		image: 'https://i.gaw.to/content/photos/08/32/083252_2012_Ferrari_F458_Spider.jpg',
		brand: 'Ferrari',
		model: 'Spider',
		year: 2012,
		price: 70000,
		doors: 2,
		color: 'Red',
		transmission: 'manual'
	},
	{ 
		image: 'https://www.aa.co.nz/assets/motoring/car-reviews/audi/a4/2016/_resampled/FillWyIxMjgwIiwiNzIwIl0/DSC-1842.JPG?m=1533766711',
        brand: 'Audi', 
        model: 'A4', 
        year: 2016, 
        price: 30000, 
        doors: 4, 
        color: 'White', 
        transmission: 'automatic' 
    },
	{ 
		image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/07/Diseno-sin-titulo-13-27.jpg',
        brand: 'Bugatti', 
        model: 'Chiron', 
        year: 2021, 
        price: 2000000, 
        doors: 2, 
        color: 'Blue', 
        transmission: 'automatic' 
    },
	{ 
		image: 'https://autodinamico.mx/wp-content/uploads/2021/05/Lykan-AD1.jpg',
        brand: 'Lykan', 
        model: 'HyperSport', 
        year: 2021, 
        price: 4000000, 
        doors: 2, 
        color: 'Red', 
        transmission: 'automatic' 
    },
	{ 
		image: 'https://jetcarprice.com/wp-content/uploads/2022/09/Lykan-HyperSport-Front.jpg',
        brand: 'Lykan', 
        model: 'HyperSport', 
        year: 2022, 
        price: 5000000, 
        doors: 2, 
        color: 'White', 
        transmission: 'automatic' 
    }
];
