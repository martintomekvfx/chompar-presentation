// Street Art Map Data for Presentation - ALL LOCATIONS
export const MAP_CENTER = [50.105, 14.490]
export const DEFAULT_ZOOM = 14

export const MAP_STYLE = {
    tileUrl: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; OpenStreetMap &copy; CARTO'
}

export const METRO_B = [
    { name: 'Křižíkova', location: [50.0905, 14.4528] },
    { name: 'Invalidovna', location: [50.0942, 14.4665] },
    { name: 'Palmovka', location: [50.1036, 14.4744] },
    { name: 'Českomoravská', location: [50.1069, 14.4892] },
    { name: 'Vysočanská', location: [50.1097, 14.4989] },
    { name: 'Kolbenova', location: [50.1084, 14.5113] },
    { name: 'Hloubětín', location: [50.1064, 14.5194] },
    { name: 'Rajská zahrada', location: [50.1028, 14.5339] },
    { name: 'Černý Most', location: [50.1011, 14.5582] },
]

// ALL art points from the original game
export const ART_POINTS = [
    // Vysočany / Hloubětín cluster
    { id: 'art-01', name: 'Kolbenova 1', location: [50.110192, 14.503811], size: 'medium' },
    { id: 'art-02', name: 'Kolbenova 2', location: [50.110203, 14.503764], size: 'small' },
    { id: 'art-03', name: 'Kolbenova 3', location: [50.109847, 14.504250], size: 'medium' },
    { id: 'art-04', name: 'Kolbenova 4', location: [50.109981, 14.504933], size: 'sticker' },
    { id: 'art-05', name: 'Kolbenova 5', location: [50.109764, 14.505742], size: 'large' },
    { id: 'art-06', name: 'Kolbenova 6', location: [50.109672, 14.505847], size: 'medium' },
    { id: 'art-07', name: 'Hloubětín 1', location: [50.110383, 14.508192], size: 'medium' },
    { id: 'art-08', name: 'Hloubětín 2', location: [50.110508, 14.509567], size: 'large' },
    { id: 'art-09', name: 'Vysočany 1', location: [50.110817, 14.505475], size: 'medium' },
    { id: 'art-10', name: 'Vysočany 2', location: [50.110986, 14.504672], size: 'small' },
    { id: 'art-11', name: 'Vysočany 3', location: [50.110706, 14.504081], size: 'sticker' },
    { id: 'art-12', name: 'Vysočany 4', location: [50.110217, 14.503650], size: 'medium' },
    { id: 'art-13', name: 'Vysočany 5', location: [50.109600, 14.505878], size: 'small' },
    { id: 'art-14', name: 'Vysočany 6', location: [50.109736, 14.508125], size: 'large' },
    { id: 'art-15', name: 'Vysočany 7', location: [50.109908, 14.508189], size: 'medium' },
    { id: 'art-16', name: 'Vysočany 8', location: [50.109517, 14.509489], size: 'sticker' },
    { id: 'art-17', name: 'Hloubětín 3', location: [50.110383, 14.509569], size: 'medium' },
    { id: 'art-18', name: 'Hloubětín 4', location: [50.110369, 14.509569], size: 'small' },
    { id: 'art-19', name: 'Hloubětín 5', location: [50.110717, 14.509906], size: 'large' },
    { id: 'art-20', name: 'Harfa', location: [50.109428, 14.498994], size: 'medium' },
    { id: 'art-21', name: 'Harfa 2', location: [50.110039, 14.504783], size: 'small' },

    // Karlín area
    { id: 'art-22', name: 'Karlín', location: [50.091603, 14.440019], size: 'large' },

    // Palmovka / Libeň area
    { id: 'art-23', name: 'Palmovka 1', location: [50.103611, 14.464650], size: 'medium' },
    { id: 'art-24', name: 'Libeň 1', location: [50.110244, 14.477544], size: 'small' },
    { id: 'art-25', name: 'Palmovka 2', location: [50.103378, 14.472653], size: 'medium' },
    { id: 'art-26', name: 'Palmovka 3', location: [50.103625, 14.470758], size: 'sticker' },
    { id: 'art-27', name: 'Palmovka 4', location: [50.103608, 14.470750], size: 'medium' },

    // Additional Vysočany / Hloubětín
    { id: 'art-28', name: 'Vysočany 9', location: [50.111042, 14.503097], size: 'large' },
    { id: 'art-29', name: 'Hloubětín 6', location: [50.108322, 14.507908], size: 'medium' },
    { id: 'art-30', name: 'Prosek', location: [50.112683, 14.499019], size: 'medium' },
    { id: 'art-31', name: 'Hloubětín 7', location: [50.108422, 14.507728], size: 'small' },
    { id: 'art-32', name: 'Vysočany 10', location: [50.109811, 14.504333], size: 'sticker' },
    { id: 'art-33', name: 'Palmovka 5', location: [50.103458, 14.463819], size: 'medium' },

    // Poděbrady
    { id: 'art-34', name: 'Poděbrady 1', location: [50.145850, 15.117822], size: 'medium' },
    { id: 'art-35', name: 'Poděbrady 2', location: [50.147622, 15.118736], size: 'medium' },
    { id: 'art-36', name: 'Poděbrady 3', location: [50.148750, 15.121333], size: 'large' },
    { id: 'art-37', name: 'Poděbrady 4', location: [50.148394, 15.123386], size: 'medium' },
    { id: 'art-38', name: 'Poděbrady 5', location: [50.148381, 15.124169], size: 'small' },
    { id: 'art-39', name: 'Poděbrady 6', location: [50.148353, 15.124464], size: 'large' },
    { id: 'art-40', name: 'Poděbrady 7', location: [50.147914, 15.125636], size: 'medium' },
    { id: 'art-41', name: 'Poděbrady 8', location: [50.148311, 15.125564], size: 'sticker' },
    { id: 'art-42', name: 'Poděbrady 9', location: [50.147572, 15.125086], size: 'medium' },
    { id: 'art-43', name: 'Poděbrady 10', location: [50.145967, 15.124406], size: 'large' },
    { id: 'art-44', name: 'Poděbrady 11', location: [50.143106, 15.121906], size: 'medium' },
    { id: 'art-45', name: 'Poděbrady 12', location: [50.143394, 15.116619], size: 'small' },

    // Centrum / Florenc
    { id: 'art-46', name: 'Centrum 1', location: [50.091525, 14.440142], size: 'medium' },
    { id: 'art-47', name: 'Centrum 2', location: [50.089364, 14.437222], size: 'medium' },
    { id: 'art-48', name: 'Centrum 3', location: [50.087811, 14.432578], size: 'large' },
    { id: 'art-49', name: 'Centrum 4', location: [50.084514, 14.429217], size: 'medium' },
    { id: 'art-50', name: 'Centrum 5', location: [50.083103, 14.426833], size: 'small' },
    { id: 'art-51', name: 'Centrum 6', location: [50.080575, 14.423917], size: 'medium' },
    { id: 'art-52', name: 'Centrum 7', location: [50.079044, 14.422033], size: 'medium' },
    { id: 'art-53', name: 'Centrum 8', location: [50.082172, 14.418336], size: 'large' },
    { id: 'art-54', name: 'Centrum 9', location: [50.081775, 14.416789], size: 'medium' },
    { id: 'art-55', name: 'Centrum 10', location: [50.081547, 14.413769], size: 'medium' },
    { id: 'art-56', name: 'Centrum 11', location: [50.092544, 14.444431], size: 'small' },
    { id: 'art-57', name: 'Vysočany 11', location: [50.110867, 14.516553], size: 'medium' },
]
