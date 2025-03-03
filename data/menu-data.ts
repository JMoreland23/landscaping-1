const menu_data = [
	{
		path: "/",
		title: "Home",
    has_dropdown: true,
		sub_menus: [
			{
				title: "Home One",
				path: "/",
			},
			{
				title: "Home Two",
				path: "/home-two",
			},
			{
				title: "Home Three",
				path: "/home-three",
			},
		],
	},
	{
		path: "/about",
		title: "About",
    has_dropdown: false,
	},

	{
		path: "#",
		title: "Services",
    has_dropdown: true,
		sub_menus: [
			{
				path: "/services",
				title: "Services",
				cName: "sub-nav",
			},
			{
				path: "/arbor-management",
				title: "Arbor Management",
				cName: "sub-nav",
			},
			{
				path: "/garden-management",
				title: "Garden Management",
			},
			{
				path: "/nursery",
				title: "Nursery & Tree Farm",
			},
			{
				path: "/trimming",
				title: "Trimming & Pruning",
			},
			{
				path: "/weeds-control",
				title: "Pests & Weeds Control",
			},
			{
				path: "/flowers-garden",
				title: "Fruits & Flowers Garden",
			},
		],
	},

	{
		path: "#",
		title: "Pages",
    has_dropdown: true,

		sub_menus: [
			{
				path: "/team",
				title: "Team",
				cName: "sub-nav",
			},
			{
				path: "/team-details",
				title: "Team Details",
				cName: "sub-nav",
			},
			{
				path: "/portfolio-1",
				title: "Portfolio 01",
			},
			{
				path: "/portfolio-2",
				title: "Portfolio 02",
			},
			{
				path: "/faq",
				title: "Faq",
			},
		],
	},

	{
		path: "#",
		title: "Blog",
    has_dropdown: true,
		sub_menus: [
			{
				path: "/blog",
				title: "Blog",
				cName: "sub-nav",
			},
			{
				path: "/blog-grid",
				title: "Blog Grid",
				cName: "sub-nav",
			},
			{
				path: "/blog-details",
				title: "Blog Details",
			},
		],
	},

	{
		path: "/contact",
		title: "Contact",
    has_dropdown: false,
	},
];

export default menu_data;