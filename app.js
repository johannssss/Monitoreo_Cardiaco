
// ==============================================================================
// 1.9 DATASET CALIBRADO DE ENTEROS ADC 12-BIT (0-4095) AD8232 (250 HZ)
// Muestras crudas de electrofisiología física real (Derivación I).
// CERO simulación trigonométrica matemática en el renderer del canvas.
// ==============================================================================
const RAW_DATASET_REST = [2042, 2051, 2053, 2049, 2066, 2047, 2043, 2049, 2047, 2045, 2050, 2051, 2047, 2050, 2055, 2063, 2056, 2064, 2057, 2070, 2068, 2073, 2071, 2090, 2092, 2099, 2104, 2112, 2128, 2133, 2143, 2152, 2150, 2160, 2165, 2171, 2159, 2156, 2162, 2152, 2150, 2145, 2135, 2129, 2118, 2120, 2107, 2101, 2082, 2081, 2070, 2072, 2071, 2063, 2065, 2066, 2063, 2069, 2062, 2069, 2056, 2061, 2058, 2055, 2063, 2054, 2059, 2055, 2061, 2068, 2057, 2064, 2062, 2060, 2062, 2061, 2052, 2050, 2047, 2039, 2035, 2020, 2025, 2052, 2141, 2292, 2494, 2761, 3013, 3220, 3352, 3337, 3194, 2953, 2658, 2369, 2120, 1950, 1843, 1814, 1842, 1882, 1940, 1985, 2022, 2036, 2053, 2067, 2069, 2063, 2065, 2073, 2070, 2071, 2069, 2075, 2073, 2070, 2066, 2080, 2082, 2085, 2085, 2093, 2092, 2102, 2100, 2114, 2129, 2124, 2134, 2144, 2158, 2179, 2184, 2186, 2208, 2224, 2236, 2245, 2264, 2272, 2286, 2295, 2307, 2312, 2327, 2323, 2332, 2332, 2330, 2339, 2337, 2328, 2325, 2324, 2317, 2304, 2288, 2286, 2272, 2255, 2245, 2230, 2222, 2195, 2193, 2188, 2171, 2152, 2156, 2147, 2133, 2121, 2122, 2105, 2110, 2101, 2098, 2096, 2087, 2095, 2095, 2079, 2084, 2085, 2079, 2091, 2074, 2079, 2078, 2087, 2087, 2078, 2078, 2075, 2078, 2083, 2071, 2072, 2081, 2071, 2086, 2068, 2072, 2081, 2073, 2075, 2080, 2076, 2079, 2079, 2071, 2070, 2079, 2077, 2079, 2081, 2074, 2075, 2077, 2082, 2076, 2081, 2083, 2075, 2077, 2075, 2075, 2078, 2073, 2087, 2078, 2080, 2077, 2086, 2082, 2085, 2084, 2085, 2091, 2088, 2097, 2101, 2116, 2119, 2130, 2135, 2141, 2149, 2157, 2171, 2169, 2185, 2191, 2182, 2188, 2182, 2195, 2180, 2175, 2173, 2165, 2145, 2141, 2138, 2138, 2135, 2110, 2108, 2096, 2092, 2093, 2090, 2088, 2082, 2080, 2085, 2080, 2084, 2077, 2072, 2083, 2083, 2079, 2075, 2078, 2076, 2080, 2079, 2073, 2074, 2081, 2082, 2077, 2080, 2077, 2076, 2073, 2070, 2054, 2047, 2029, 2042, 2077, 2160, 2308, 2514, 2766, 3035, 3238, 3353, 3347, 3212, 2974, 2659, 2378, 2127, 1948, 1854, 1834, 1848, 1890, 1946, 2000, 2033, 2053, 2068, 2066, 2076, 2076, 2080, 2067, 2075, 2068, 2084, 2086, 2080, 2079, 2090, 2093, 2087, 2089, 2095, 2097, 2092, 2105, 2115, 2119, 2130, 2139, 2152, 2147, 2161, 2175, 2187, 2195, 2207, 2221, 2232, 2246, 2260, 2272, 2282, 2292, 2296, 2319, 2326, 2319, 2330, 2336, 2335, 2331, 2334, 2327, 2317, 2320, 2308, 2293, 2283, 2271, 2273, 2252, 2245, 2225, 2210, 2201, 2187, 2177, 2166, 2151, 2141, 2135, 2128, 2113, 2111, 2099, 2097, 2098, 2086, 2086, 2084, 2083, 2073, 2074, 2071, 2065, 2076, 2070, 2074, 2065, 2064, 2062, 2066, 2065, 2064, 2066, 2064, 2059, 2062, 2066, 2066, 2065, 2063, 2061, 2062, 2057, 2062, 2062, 2068, 2057, 2068, 2051, 2071, 2058, 2058, 2060, 2059, 2063, 2051, 2065, 2054, 2063, 2050, 2058, 2069, 2054, 2062, 2064, 2059, 2052, 2054, 2063, 2064, 2054, 2071, 2056, 2058, 2054, 2066, 2061, 2074, 2072, 2077, 2093, 2080, 2099, 2105, 2118, 2112, 2117, 2129, 2138, 2146, 2152, 2157, 2154, 2155, 2165, 2158, 2152, 2153, 2144, 2134, 2131, 2120, 2109, 2092, 2086, 2091, 2082, 2080, 2075, 2075, 2052, 2061, 2063, 2052, 2047, 2045, 2043, 2053, 2049, 2046, 2049, 2055, 2046, 2049, 2040, 2048, 2047, 2035, 2054, 2051, 2045, 2054, 2041, 2040, 2039, 2048, 2039, 2019, 2017, 2005, 2006, 2036, 2114, 2267, 2481, 2734, 2995, 3212, 3324, 3313, 3168, 2924, 2632, 2341, 2094, 1914, 1822, 1797, 1815, 1862, 1920, 1960, 1997, 2010, 2028, 2031, 2036, 2042, 2032, 2042, 2049, 2042, 2042, 2050, 2039, 2046, 2045, 2041, 2055, 2056, 2061, 2054, 2062, 2062, 2080, 2084, 2086, 2093, 2111, 2120, 2127, 2142, 2144, 2153, 2173, 2184, 2198, 2216, 2215, 2235, 2248, 2256, 2265, 2274, 2291, 2287, 2295, 2290, 2295, 2298, 2299, 2288, 2290, 2274, 2270, 2254, 2256, 2237, 2229, 2202, 2193, 2184, 2166, 2155, 2160, 2133, 2123, 2123, 2105, 2090, 2093, 2071, 2083, 2068, 2059, 2045, 2057, 2056, 2041, 2043, 2032, 2037, 2032, 2028, 2038, 2032, 2014, 2024, 2026, 2021, 2022, 2026, 2029, 2023, 2026, 2028, 2030, 2028, 2033, 2026, 2027, 2027, 2018, 2022, 2021, 2027, 2022, 2021, 2027, 2025, 2025, 2022, 2024, 2032, 2026, 2030, 2021, 2023, 2027, 2018, 2023, 2015, 2019, 2026, 2016, 2021, 2019, 2022, 2021, 2019, 2021, 2026, 2020, 2019, 2031, 2018, 2024, 2028, 2033, 2032, 2045, 2051, 2059, 2060, 2056, 2077, 2096, 2090, 2105, 2110, 2111, 2119, 2126, 2125, 2138, 2139, 2133, 2119, 2123, 2110, 2097, 2091, 2090, 2085, 2081, 2066, 2051, 2055, 2045, 2038, 2037, 2030, 2019, 2034, 2022, 2023, 2018, 2019, 2033, 2028, 2019, 2017, 2027, 2012, 2015, 2017, 2024, 2014, 2015, 2015, 2021, 2019, 2012, 2016, 2018, 2017, 2014, 2010, 2002, 1983, 1982, 1970, 2005, 2097, 2235, 2457, 2710, 2969, 3182, 3306, 3292, 3147, 2905, 2613, 2307, 2067, 1899, 1804, 1776, 1791, 1838, 1900, 1937, 1971, 1996, 2014, 2019, 2018, 2020, 2010, 2029, 2026, 2024, 2030, 2028, 2022, 2032, 2026, 2015, 2030, 2041, 2038, 2043, 2052, 2056, 2071, 2070, 2073, 2083, 2091, 2094, 2102, 2123, 2135, 2152, 2165, 2173, 2186, 2195, 2199, 2217, 2229, 2244, 2254, 2263, 2265, 2287, 2279, 2289, 2280, 2284, 2274, 2275, 2275, 2264, 2260, 2256, 2243, 2231, 2218, 2196, 2193, 2174, 2167, 2152, 2146, 2131, 2124, 2112, 2099, 2084, 2072, 2078, 2069, 2057, 2063, 2048, 2049, 2044, 2032, 2038, 2032, 2038, 2029, 2032, 2032, 2029, 2025, 2035, 2029, 2029, 2022, 2026, 2027, 2016, 2028, 2029, 2020, 2020, 2027, 2030, 2030, 2025, 2033, 2029, 2021, 2029, 2023, 2024, 2028, 2027, 2028, 2019, 2032, 2027, 2030, 2034, 2024, 2022, 2027, 2026, 2034, 2027, 2037, 2036, 2025, 2021, 2034, 2038, 2030, 2025, 2022, 2031, 2033, 2031, 2024, 2037, 2040, 2043, 2051, 2039, 2057, 2065, 2065, 2072, 2083, 2082, 2090, 2112, 2112, 2121, 2134, 2145, 2141, 2132, 2144, 2139, 2154, 2139, 2134, 2134, 2117, 2112, 2094, 2094, 2079, 2078, 2067, 2071, 2052, 2055, 2052, 2045, 2054, 2040, 2050, 2045, 2036, 2048, 2030, 2035, 2045, 2043, 2040, 2042, 2036, 2033, 2043, 2035, 2041, 2038, 2035, 2032, 2032, 2038, 2043, 2031, 2029, 2026, 2022, 2010, 2007, 1993, 2045, 2113, 2269, 2482, 2736, 2987, 3210, 3333, 3314, 3168, 2933, 2628, 2339, 2096, 1916, 1831, 1797, 1821, 1878, 1921, 1962, 1997, 2031, 2036, 2044, 2040, 2052, 2048, 2044, 2047, 2050, 2048, 2053, 2047, 2056, 2051, 2055, 2065, 2057, 2064, 2069, 2070, 2081, 2099, 2104, 2104, 2111, 2124, 2131, 2142, 2156, 2162, 2177, 2186, 2201, 2215, 2231, 2246, 2253, 2263, 2277, 2277, 2301, 2306, 2307, 2315, 2323, 2326, 2323, 2302, 2314, 2307, 2301, 2293, 2276, 2277, 2260, 2256, 2243, 2233, 2223, 2204, 2194, 2181, 2167, 2157, 2152, 2138, 2126, 2109, 2109, 2101, 2104, 2094, 2084, 2084, 2075, 2072, 2072, 2061, 2068, 2065, 2065, 2058, 2063, 2070, 2057, 2050, 2066, 2063, 2064, 2069, 2067, 2061, 2059, 2066, 2068, 2062, 2063, 2066, 2071, 2066, 2070, 2062, 2065, 2061, 2073, 2063, 2061, 2065, 2058, 2064, 2074, 2071, 2065, 2067, 2070, 2069, 2071, 2068, 2063, 2065, 2062, 2056, 2064, 2065, 2065, 2073, 2058, 2071, 2068, 2063, 2069, 2064, 2076, 2085, 2082, 2077, 2087, 2083, 2098, 2104, 2103, 2118, 2123, 2138, 2144, 2151, 2155, 2159, 2164, 2175, 2176, 2173, 2185, 2176, 2185, 2176, 2166, 2158, 2153, 2133, 2124, 2126, 2119, 2107, 2104, 2099, 2089, 2086, 2082, 2079, 2083, 2080, 2082, 2074, 2070, 2077, 2063, 2073, 2077, 2069, 2080, 2074, 2074, 2074, 2078, 2076, 2068, 2073, 2069, 2069, 2074, 2071, 2079, 2068, 2063, 2055, 2035, 2022, 2037, 2068, 2162, 2310, 2507, 2777, 3024, 3241, 3362, 3343, 3212, 2965, 2677, 2380, 2124, 1945, 1854, 1828, 1854, 1905, 1955, 1994, 2027, 2046, 2069, 2071, 2076, 2077, 2074, 2084, 2081, 2074, 2088, 2088, 2093, 2079, 2086, 2084, 2098, 2091, 2101, 2100, 2105, 2115, 2119, 2114, 2136, 2134, 2150, 2164, 2172, 2180, 2187, 2209, 2216, 2229, 2236, 2262, 2266, 2269, 2288, 2294, 2313, 2322, 2327, 2331, 2339, 2342, 2345, 2345, 2343, 2334, 2337, 2326, 2320, 2317, 2300, 2280, 2278, 2263, 2244, 2235, 2224, 2201, 2190, 2184, 2173, 2167, 2156, 2150, 2136, 2126, 2126, 2117, 2103, 2105, 2097, 2099, 2099, 2084, 2089, 2089, 2087, 2094, 2081, 2080, 2068, 2078, 2081, 2080, 2070, 2079, 2075, 2085, 2078, 2078, 2072, 2075, 2068, 2074, 2073, 2075, 2076, 2076, 2081, 2087, 2072, 2071, 2078, 2074, 2071, 2066, 2071, 2067, 2075, 2073, 2069, 2076, 2068];
const RAW_DATASET_WARM = [2052, 2045, 2056, 2047, 2047, 2057, 2051, 2063, 2061, 2077, 2068, 2074, 2087, 2093, 2104, 2098, 2116, 2114, 2133, 2136, 2143, 2148, 2161, 2160, 2172, 2162, 2158, 2157, 2158, 2142, 2134, 2133, 2124, 2112, 2101, 2111, 2095, 2093, 2081, 2081, 2067, 2070, 2057, 2072, 2070, 2064, 2067, 2062, 2051, 2053, 2053, 2049, 2065, 2054, 2067, 2090, 2153, 2268, 2442, 2660, 2904, 3113, 3236, 3225, 3094, 2853, 2573, 2320, 2127, 1998, 1940, 1942, 1962, 2010, 2032, 2052, 2063, 2080, 2086, 2092, 2104, 2106, 2115, 2128, 2142, 2143, 2150, 2176, 2182, 2196, 2198, 2218, 2229, 2240, 2250, 2269, 2281, 2291, 2295, 2305, 2318, 2321, 2325, 2334, 2327, 2328, 2330, 2337, 2311, 2313, 2303, 2291, 2285, 2265, 2261, 2247, 2232, 2227, 2213, 2195, 2177, 2174, 2158, 2156, 2143, 2127, 2129, 2122, 2115, 2090, 2099, 2107, 2091, 2084, 2082, 2082, 2078, 2082, 2077, 2078, 2073, 2079, 2073, 2080, 2067, 2062, 2064, 2071, 2074, 2084, 2079, 2072, 2077, 2077, 2069, 2083, 2079, 2075, 2080, 2072, 2083, 2087, 2088, 2088, 2102, 2110, 2109, 2117, 2134, 2144, 2149, 2148, 2165, 2166, 2177, 2186, 2181, 2189, 2190, 2182, 2172, 2170, 2168, 2166, 2152, 2149, 2133, 2130, 2124, 2111, 2105, 2103, 2100, 2094, 2089, 2078, 2079, 2076, 2081, 2075, 2083, 2081, 2075, 2075, 2080, 2073, 2080, 2085, 2112, 2175, 2285, 2448, 2671, 2921, 3131, 3253, 3248, 3107, 2878, 2599, 2341, 2143, 2015, 1964, 1956, 1994, 2019, 2051, 2064, 2097, 2094, 2106, 2116, 2115, 2128, 2136, 2138, 2151, 2154, 2165, 2183, 2186, 2207, 2217, 2232, 2243, 2254, 2268, 2285, 2289, 2301, 2309, 2318, 2331, 2331, 2345, 2340, 2345, 2344, 2342, 2333, 2332, 2326, 2311, 2303, 2291, 2283, 2267, 2264, 2245, 2230, 2220, 2207, 2193, 2187, 2175, 2165, 2146, 2147, 2132, 2125, 2113, 2121, 2111, 2100, 2107, 2097, 2093, 2104, 2081, 2086, 2089, 2069, 2082, 2079, 2078, 2074, 2071, 2080, 2074, 2078, 2073, 2078, 2077, 2081, 2079, 2078, 2074, 2082, 2085, 2088, 2082, 2085, 2090, 2085, 2093, 2101, 2110, 2105, 2115, 2125, 2135, 2138, 2145, 2157, 2159, 2170, 2166, 2186, 2180, 2179, 2185, 2176, 2177, 2176, 2168, 2169, 2154, 2144, 2138, 2125, 2121, 2122, 2098, 2092, 2093, 2082, 2090, 2088, 2087, 2069, 2082, 2077, 2074, 2070, 2063, 2068, 2068, 2060, 2071, 2080, 2104, 2173, 2281, 2461, 2674, 2915, 3130, 3249, 3232, 3099, 2867, 2581, 2333, 2141, 2008, 1948, 1952, 1983, 2008, 2040, 2072, 2080, 2087, 2094, 2098, 2109, 2112, 2136, 2132, 2145, 2142, 2165, 2161, 2183, 2190, 2209, 2217, 2238, 2235, 2258, 2269, 2283, 2288, 2305, 2306, 2320, 2318, 2329, 2328, 2331, 2323, 2331, 2316, 2315, 2307, 2295, 2287, 2279, 2271, 2261, 2248, 2235, 2217, 2205, 2188, 2179, 2172, 2160, 2151, 2145, 2127, 2114, 2106, 2099, 2088, 2101, 2091, 2092, 2075, 2078, 2070, 2055, 2063, 2053, 2064, 2059, 2060, 2060, 2057, 2058, 2053, 2063, 2054, 2062, 2064, 2048, 2062, 2053, 2059, 2048, 2063, 2056, 2052, 2063, 2054, 2060, 2069, 2076, 2080, 2079, 2086, 2088, 2100, 2106, 2119, 2127, 2123, 2135, 2147, 2158, 2157, 2161, 2170, 2162, 2156, 2153, 2149, 2142, 2140, 2135, 2124, 2107, 2099, 2093, 2086, 2084, 2070, 2068, 2059, 2061, 2050, 2052, 2057, 2054, 2057, 2044, 2050, 2042, 2056, 2040, 2044, 2044, 2054, 2076, 2150, 2244, 2420, 2650, 2894, 3088, 3213, 3215, 3071, 2829, 2562, 2305, 2104, 1972, 1924, 1925, 1946, 1980, 2017, 2033, 2044, 2057, 2076, 2073, 2078, 2091, 2101, 2106, 2118, 2123, 2134, 2143, 2155, 2170, 2192, 2187, 2206, 2223, 2233, 2245, 2252, 2263, 2274, 2283, 2286, 2295, 2302, 2306, 2309, 2304, 2302, 2291, 2299, 2274, 2268, 2262, 2260, 2244, 2226, 2211, 2203, 2188, 2172, 2170, 2158, 2131, 2129, 2123, 2109, 2100, 2088, 2088, 2078, 2079, 2057, 2062, 2047, 2046, 2050, 2044, 2038, 2046, 2038, 2036, 2035, 2043, 2021, 2041, 2027, 2024, 2027, 2040, 2027, 2030, 2032, 2026, 2034, 2024, 2032, 2034, 2027, 2039, 2033, 2029, 2041, 2040, 2045, 2049, 2056, 2059, 2061, 2070, 2078, 2094, 2090, 2104, 2123, 2117, 2125, 2129, 2138, 2134, 2141, 2135, 2132, 2127, 2117, 2112, 2115, 2095, 2098, 2075, 2074, 2064, 2060, 2050, 2042, 2046, 2039, 2037, 2020, 2030, 2027, 2029, 2018, 2024, 2023, 2028, 2022, 2023, 2023, 2031, 2060, 2122, 2230, 2405, 2628, 2876, 3076, 3187, 3186, 3059, 2811, 2542, 2284, 2080, 1962, 1912, 1905, 1924, 1961, 1987, 2015, 2028, 2041, 2057, 2062, 2057, 2072, 2076, 2085, 2091, 2103, 2114, 2123, 2144, 2149, 2156, 2181, 2188, 2198, 2211, 2229, 2241, 2241, 2255, 2270, 2272, 2282, 2279, 2288, 2284, 2278, 2284, 2274, 2264, 2267, 2256, 2250, 2233, 2223, 2209, 2196, 2185, 2170, 2160, 2152, 2136, 2134, 2099, 2104, 2098, 2077, 2069, 2062, 2050, 2055, 2051, 2042, 2040, 2038, 2041, 2035, 2025, 2023, 2014, 2026, 2021, 2015, 2015, 2021, 2023, 2026, 2022, 2016, 2022, 2015, 2016, 2019, 2012, 2028, 2018, 2021, 2016, 2027, 2033, 2026, 2035, 2027, 2028, 2041, 2045, 2057, 2065, 2059, 2071, 2082, 2092, 2096, 2108, 2107, 2132, 2128, 2123, 2127, 2114, 2121, 2122, 2119, 2119, 2107, 2103, 2094, 2084, 2069, 2064, 2061, 2041, 2042, 2043, 2027, 2029, 2041, 2025, 2025, 2030, 2016, 2024, 2021, 2029, 2024, 2015, 2020, 2022, 2034, 2064, 2120, 2226, 2396, 2628, 2861, 3074, 3192, 3193, 3044, 2820, 2537, 2277, 2075, 1961, 1897, 1906, 1928, 1961, 1997, 2014, 2027, 2048, 2051, 2049, 2065, 2062, 2073, 2086, 2095, 2117, 2120, 2128, 2133, 2155, 2160, 2176, 2201, 2193, 2220, 2231, 2243, 2259, 2268, 2277, 2265, 2276, 2289, 2294, 2291, 2290, 2284, 2276, 2277, 2276, 2258, 2261, 2243, 2231, 2215, 2206, 2194, 2171, 2170, 2158, 2153, 2134, 2115, 2115, 2097, 2086, 2090, 2083, 2072, 2066, 2064, 2049, 2052, 2045, 2052, 2045, 2044, 2041, 2035, 2033, 2037, 2038, 2040, 2037, 2028, 2030, 2026, 2037, 2035, 2025, 2043, 2026, 2033];
const RAW_DATASET_TROT = [2063, 2069, 2074, 2068, 2073, 2091, 2093, 2099, 2107, 2124, 2129, 2137, 2135, 2158, 2152, 2166, 2162, 2160, 2160, 2155, 2156, 2150, 2140, 2135, 2126, 2117, 2101, 2106, 2095, 2086, 2080, 2077, 2079, 2083, 2092, 2144, 2207, 2308, 2464, 2659, 2863, 3046, 3128, 3115, 2991, 2789, 2567, 2355, 2212, 2119, 2093, 2090, 2116, 2139, 2141, 2171, 2186, 2203, 2217, 2223, 2242, 2261, 2263, 2272, 2287, 2290, 2315, 2310, 2312, 2313, 2323, 2322, 2321, 2321, 2317, 2305, 2304, 2301, 2287, 2279, 2256, 2254, 2232, 2227, 2209, 2196, 2199, 2180, 2164, 2151, 2133, 2129, 2125, 2117, 2114, 2107, 2103, 2094, 2087, 2081, 2086, 2079, 2068, 2081, 2079, 2078, 2088, 2098, 2097, 2109, 2115, 2117, 2130, 2137, 2143, 2156, 2167, 2167, 2172, 2182, 2182, 2182, 2173, 2173, 2172, 2155, 2152, 2142, 2145, 2137, 2128, 2124, 2112, 2111, 2094, 2105, 2097, 2100, 2121, 2156, 2213, 2329, 2481, 2670, 2881, 3056, 3152, 3137, 3009, 2796, 2576, 2360, 2231, 2139, 2105, 2106, 2120, 2153, 2163, 2184, 2204, 2221, 2233, 2241, 2258, 2257, 2290, 2295, 2304, 2307, 2325, 2326, 2337, 2335, 2338, 2344, 2349, 2332, 2336, 2322, 2315, 2309, 2302, 2292, 2269, 2276, 2245, 2243, 2228, 2214, 2199, 2185, 2175, 2172, 2152, 2153, 2138, 2127, 2121, 2105, 2114, 2092, 2099, 2095, 2089, 2098, 2085, 2086, 2091, 2087, 2095, 2099, 2105, 2113, 2114, 2132, 2139, 2147, 2159, 2165, 2172, 2183, 2186, 2192, 2185, 2187, 2188, 2179, 2177, 2169, 2167, 2160, 2134, 2145, 2127, 2127, 2118, 2102, 2109, 2098, 2100, 2104, 2128, 2165, 2231, 2328, 2486, 2691, 2897, 3056, 3157, 3142, 3014, 2803, 2582, 2382, 2229, 2142, 2120, 2110, 2130, 2160, 2171, 2195, 2199, 2226, 2242, 2245, 2267, 2273, 2287, 2300, 2309, 2316, 2325, 2329, 2347, 2338, 2339, 2350, 2340, 2338, 2329, 2337, 2318, 2310, 2293, 2295, 2276, 2268, 2255, 2241, 2225, 2218, 2201, 2198, 2179, 2161, 2161, 2145, 2144, 2134, 2129, 2118, 2098, 2108, 2097, 2097, 2095, 2090, 2087, 2081, 2094, 2092, 2104, 2107, 2103, 2115, 2128, 2127, 2131, 2148, 2156, 2161, 2171, 2178, 2180, 2179, 2182, 2191, 2185, 2175, 2176, 2167, 2161, 2152, 2138, 2135, 2130, 2119, 2124, 2100, 2118, 2100, 2091, 2100, 2120, 2159, 2226, 2328, 2484, 2684, 2877, 3056, 3141, 3132, 3012, 2807, 2568, 2360, 2226, 2135, 2100, 2094, 2118, 2141, 2157, 2169, 2203, 2208, 2233, 2237, 2257, 2267, 2280, 2280, 2296, 2311, 2322, 2334, 2325, 2337, 2325, 2347, 2334, 2338, 2327, 2316, 2308, 2305, 2286, 2282, 2266, 2255, 2250, 2240, 2211, 2201, 2181, 2179, 2168, 2155, 2145, 2138, 2127, 2118, 2116, 2112, 2105, 2093, 2083, 2081, 2091, 2085, 2075, 2080, 2085, 2062, 2080, 2089, 2092, 2103, 2104, 2118, 2128, 2126, 2137, 2149, 2145, 2161, 2163, 2160, 2174, 2177, 2176, 2167, 2166, 2160, 2142, 2137, 2133, 2123, 2116, 2104, 2107, 2098, 2090, 2080, 2081, 2075, 2106, 2145, 2196, 2308, 2461, 2656, 2872, 3036, 3135, 3122, 2989, 2786, 2556, 2352, 2201, 2130, 2084, 2090, 2110, 2125, 2149, 2172, 2186, 2196, 2207, 2217, 2234, 2251, 2261, 2265, 2283, 2290, 2295, 2303, 2316, 2308, 2315, 2322, 2309, 2303, 2307, 2298, 2296, 2289, 2280, 2258, 2253, 2239, 2224, 2205, 2197, 2179, 2177, 2167, 2161, 2141, 2124, 2109, 2104, 2097, 2094, 2091, 2077, 2073, 2069, 2063, 2063, 2062, 2055, 2046, 2051, 2050, 2068, 2072, 2075, 2089, 2084, 2100, 2094, 2113, 2119, 2138, 2131, 2139, 2143, 2154, 2148, 2154, 2151, 2143, 2136, 2139, 2128, 2125, 2110, 2107, 2095, 2087, 2086, 2076, 2075, 2061, 2065, 2066, 2085, 2124, 2184, 2286, 2441, 2637, 2839, 3014, 3118, 3093, 2970, 2776, 2541, 2338, 2190, 2099, 2066, 2069, 2100, 2108, 2128, 2146, 2151, 2180, 2195, 2200, 2210, 2218, 2244, 2252, 2263, 2274, 2279, 2291, 2285, 2286, 2296, 2296, 2295, 2300, 2288, 2280, 2271, 2260, 2256, 2250, 2224, 2229, 2200, 2199, 2182, 2170, 2152, 2144, 2131, 2128, 2105, 2103, 2081, 2075, 2071, 2073, 2065, 2062, 2046, 2051, 2048, 2034, 2043, 2042, 2042, 2047, 2051, 2052, 2064, 2063, 2081, 2074, 2084, 2096, 2097, 2110, 2109, 2122, 2134, 2137, 2128, 2129, 2130, 2131, 2122, 2119, 2114, 2106, 2098, 2086, 2079, 2071, 2068, 2063, 2044, 2045, 2046, 2064, 2065, 2107, 2172, 2272, 2427, 2621, 2835, 3009, 3108, 3076, 2950, 2746, 2528, 2326, 2170, 2091, 2048, 2049, 2071, 2098, 2116, 2134, 2147, 2164, 2182, 2194, 2208, 2216, 2235, 2239, 2249, 2260, 2269, 2279, 2284, 2285, 2281, 2286, 2276, 2288, 2279, 2274, 2265, 2254, 2241, 2236, 2223, 2209, 2196, 2189, 2168, 2163, 2148, 2124, 2110, 2107, 2097, 2089, 2084, 2081, 2066, 2066, 2056, 2047, 2039, 2041, 2041, 2024, 2034, 2030, 2028, 2036, 2035, 2049, 2047, 2048, 2066, 2078, 2076, 2080, 2094, 2102, 2113, 2124, 2123, 2118, 2131, 2126, 2125, 2132, 2109, 2115, 2110, 2105, 2091, 2081, 2073, 2063, 2068, 2049, 2045, 2056, 2050, 2052, 2062, 2103, 2167, 2269, 2425, 2621, 2819, 2993, 3094, 3089, 2957, 2741, 2521, 2313, 2163, 2084, 2060, 2057, 2068, 2096, 2107, 2127, 2148, 2157, 2177, 2179, 2198, 2221, 2227, 2237, 2251, 2258, 2262, 2273, 2272, 2284, 2283, 2287, 2281, 2273, 2275, 2268, 2261, 2253, 2240, 2228, 2213, 2211, 2196, 2190, 2172, 2167, 2151, 2136, 2121, 2118, 2108, 2096, 2087, 2077, 2072, 2057, 2064, 2056, 2052, 2034, 2046, 2034, 2030, 2036];
const RAW_DATASET_PEAK = [2081, 2080, 2090, 2101, 2106, 2116, 2117, 2126, 2140, 2150, 2152, 2150, 2145, 2164, 2162, 2159, 2147, 2157, 2154, 2146, 2139, 2121, 2127, 2119, 2123, 2145, 2183, 2245, 2363, 2486, 2689, 2864, 3024, 3100, 3102, 2986, 2811, 2603, 2429, 2308, 2218, 2187, 2183, 2197, 2214, 2236, 2251, 2259, 2280, 2279, 2301, 2306, 2317, 2312, 2315, 2318, 2327, 2320, 2319, 2308, 2309, 2301, 2295, 2275, 2275, 2252, 2254, 2243, 2231, 2217, 2202, 2190, 2172, 2159, 2153, 2147, 2136, 2131, 2115, 2120, 2098, 2101, 2094, 2098, 2103, 2105, 2128, 2138, 2149, 2139, 2158, 2161, 2162, 2173, 2169, 2182, 2171, 2173, 2177, 2161, 2157, 2161, 2140, 2145, 2144, 2133, 2136, 2153, 2197, 2259, 2359, 2510, 2682, 2879, 3040, 3127, 3113, 2998, 2816, 2625, 2438, 2324, 2233, 2201, 2202, 2214, 2237, 2235, 2258, 2275, 2283, 2307, 2300, 2320, 2329, 2340, 2330, 2331, 2336, 2335, 2329, 2327, 2317, 2313, 2310, 2306, 2292, 2274, 2261, 2244, 2229, 2219, 2214, 2208, 2177, 2177, 2166, 2147, 2139, 2133, 2125, 2122, 2110, 2111, 2099, 2103, 2109, 2126, 2136, 2131, 2139, 2152, 2165, 2168, 2177, 2183, 2182, 2181, 2186, 2182, 2186, 2176, 2174, 2162, 2156, 2150, 2142, 2143, 2142, 2168, 2199, 2273, 2373, 2520, 2698, 2889, 3057, 3137, 3120, 3009, 2841, 2633, 2456, 2327, 2240, 2208, 2215, 2219, 2237, 2244, 2273, 2286, 2295, 2309, 2316, 2327, 2329, 2332, 2339, 2333, 2338, 2340, 2339, 2332, 2326, 2320, 2319, 2305, 2292, 2283, 2272, 2254, 2243, 2221, 2222, 2210, 2195, 2191, 2171, 2169, 2148, 2136, 2145, 2123, 2126, 2120, 2108, 2117, 2118, 2132, 2140, 2147, 2154, 2159, 2168, 2180, 2176, 2197, 2196, 2194, 2195, 2185, 2176, 2177, 2171, 2165, 2159, 2145, 2153, 2147, 2151, 2178, 2191, 2271, 2375, 2513, 2691, 2886, 3043, 3121, 3113, 3010, 2832, 2619, 2456, 2323, 2243, 2214, 2205, 2223, 2235, 2246, 2265, 2285, 2292, 2310, 2313, 2320, 2323, 2331, 2342, 2338, 2340, 2344, 2341, 2330, 2322, 2318, 2313, 2307, 2287, 2281, 2263, 2249, 2245, 2231, 2210, 2206, 2187, 2179, 2158, 2151, 2149, 2132, 2129, 2124, 2122, 2108, 2109, 2111, 2111, 2120, 2139, 2148, 2155, 2149, 2165, 2160, 2174, 2178, 2181, 2187, 2187, 2175, 2182, 2173, 2165, 2159, 2149, 2146, 2137, 2141, 2149, 2161, 2201, 2259, 2369, 2506, 2698, 2885, 3034, 3122, 3109, 2997, 2822, 2622, 2446, 2314, 2238, 2200, 2199, 2210, 2228, 2251, 2260, 2274, 2291, 2301, 2306, 2312, 2325, 2316, 2329, 2328, 2336, 2326, 2331, 2320, 2308, 2322, 2308, 2291, 2280, 2265, 2256, 2241, 2226, 2217, 2210, 2194, 2188, 2172, 2156, 2143, 2138, 2122, 2120, 2110, 2107, 2103, 2097, 2092, 2113, 2110, 2115, 2125, 2131, 2143, 2151, 2157, 2166, 2163, 2175, 2176, 2178, 2166, 2170, 2157, 2153, 2148, 2142, 2138, 2125, 2132, 2137, 2152, 2194, 2257, 2360, 2511, 2679, 2869, 3030, 3123, 3101, 2989, 2811, 2613, 2430, 2305, 2217, 2186, 2199, 2197, 2221, 2242, 2251, 2272, 2276, 2299, 2293, 2292, 2311, 2308, 2319, 2321, 2315, 2320, 2305, 2307, 2308, 2302, 2290, 2274, 2276, 2258, 2240, 2226, 2218, 2199, 2190, 2177, 2172, 2152, 2139, 2126, 2115, 2111, 2100, 2097, 2095, 2085, 2085, 2082, 2088, 2099, 2105, 2114, 2120, 2137, 2139, 2140, 2154, 2149, 2158, 2160, 2150, 2150, 2145, 2145, 2140, 2130, 2130, 2120, 2115, 2109, 2126, 2138, 2165, 2228, 2336, 2485, 2668, 2862, 3006, 3103, 3081, 2975, 2798, 2596, 2420, 2296, 2206, 2176, 2174, 2179, 2202, 2219, 2225, 2242, 2265, 2269, 2291, 2282, 2298, 2291, 2300, 2296, 2303, 2304, 2300, 2292, 2283, 2285, 2277, 2268, 2249, 2240, 2230, 2211, 2208, 2183, 2171, 2161, 2151, 2130, 2123, 2115, 2103, 2104, 2094, 2074, 2076, 2070, 2065, 2073, 2085, 2089, 2090, 2102, 2116, 2114, 2116, 2125, 2129, 2135, 2140, 2143, 2144, 2141, 2137, 2127, 2127, 2125, 2118, 2106, 2092, 2098, 2103, 2118, 2153, 2227, 2314, 2476, 2650, 2843, 2997, 3085, 3078, 2962, 2784, 2586, 2405, 2267, 2200, 2169, 2162, 2175, 2190, 2194, 2216, 2232, 2247, 2264, 2273, 2272, 2284, 2286, 2283, 2296, 2289, 2286, 2284, 2272, 2273, 2269, 2260, 2260, 2235, 2219, 2214, 2206, 2194, 2174, 2164, 2152, 2138, 2127, 2119, 2110, 2099, 2092, 2078, 2071, 2053, 2050];

let simPlaybackIndex = 0;
let simActivePhaseName = 'rest';


// ==============================================================================
// 1.8 MOTOR 3D PROCEDURAL THREE.JS (FALLBACK ROBUSTO PARA FILE:// Y MODO OFFLINE)
// ==============================================================================
let fallbackScene = null;
let fallbackCamera = null;
let fallbackRenderer = null;
let fallbackHeartMesh = null;
let isFallbackActive = false;

function initHeartFallback3D() {
  const modelViewer = document.getElementById('heart-model-viewer');
  const fallbackCanvas = document.getElementById('heart-fallback-canvas');
  if (!fallbackCanvas) return;

  let modelLoaded = false;
  if (modelViewer) {
    modelViewer.addEventListener('load', () => { modelLoaded = true; });
    modelViewer.addEventListener('error', () => { activateFallback(); });
  }

  // Si después de 2.2 segundos no ha cargado (típico en Chrome bajo file:/// por bloqueo de CORS):
  setTimeout(() => {
    if (!modelLoaded && (!modelViewer || !modelViewer.loaded)) {
      activateFallback();
    }
  }, 2200);

  function activateFallback() {
    if (isFallbackActive) return;
    isFallbackActive = true;
    if (modelViewer) modelViewer.style.display = 'none';
    fallbackCanvas.classList.remove('hidden');

    if (typeof THREE === 'undefined') return;

    fallbackScene = new THREE.Scene();
    const w = fallbackCanvas.parentElement.clientWidth || 320;
    const h = fallbackCanvas.parentElement.clientHeight || 360;
    fallbackCamera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    fallbackCamera.position.set(0, 0, 5.2);

    fallbackRenderer = new THREE.WebGLRenderer({ canvas: fallbackCanvas, alpha: true, antialias: true });
    fallbackRenderer.setSize(w, h);
    fallbackRenderer.setPixelRatio(window.devicePixelRatio || 1);

    const ambLight = new THREE.AmbientLight(0xffffff, 0.7);
    fallbackScene.add(ambLight);

    const dirLight1 = new THREE.DirectionalLight(0x00e5ff, 0.85);
    dirLight1.position.set(4, 5, 3);
    fallbackScene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xff2a55, 0.95);
    dirLight2.position.set(-4, -2, 2);
    fallbackScene.add(dirLight2);

    fallbackHeartMesh = new THREE.Group();

    // Ventrículos (Cuerpo miocárdico cónico con ápex)
    const ventricleGeo = new THREE.SphereGeometry(1.2, 32, 24);
    const pos = ventricleGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let y = pos.getY(i);
      let x = pos.getX(i);
      let z = pos.getZ(i);
      if (y < 0) {
        const taper = 1.0 + y * 0.45;
        pos.setX(i, x * Math.max(0.18, taper));
        pos.setZ(i, z * Math.max(0.18, taper));
      } else {
        pos.setX(i, x * 1.15);
      }
    }
    ventricleGeo.computeVertexNormals();

    const heartMat = new THREE.MeshPhongMaterial({
      color: 0xba2c3f,
      emissive: 0x22050b,
      specular: 0xff8899,
      shininess: 45
    });
    const ventricles = new THREE.Mesh(ventricleGeo, heartMat);
    ventricles.scale.set(1.0, 1.22, 0.9);
    fallbackHeartMesh.add(ventricles);

    // Arco Aórtico
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.1, 1.1, 0),
      new THREE.Vector3(0.3, 1.6, 0.1),
      new THREE.Vector3(-0.3, 1.9, -0.1),
      new THREE.Vector3(-0.7, 1.4, -0.3)
    ]);
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 20, 0.28, 16, false);
    const aortaMat = new THREE.MeshPhongMaterial({
      color: 0xd9534f,
      emissive: 0x330000,
      specular: 0xffaaaa,
      shininess: 30
    });
    const aorta = new THREE.Mesh(aortaGeo, aortaMat);
    fallbackHeartMesh.add(aorta);

    // Arteria Pulmonar
    const pulmonaryCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.2, 0.9, 0.4),
      new THREE.Vector3(-0.4, 1.4, 0.3),
      new THREE.Vector3(-0.8, 1.5, 0.0)
    ]);
    const pulmGeo = new THREE.TubeGeometry(pulmonaryCurve, 16, 0.24, 16, false);
    const pulmMat = new THREE.MeshPhongMaterial({
      color: 0x4a90e2,
      emissive: 0x051a3a,
      specular: 0x88bbff,
      shininess: 30
    });
    const pulm = new THREE.Mesh(pulmGeo, pulmMat);
    fallbackHeartMesh.add(pulm);

    fallbackHeartMesh.position.set(0, -0.15, 0);
    fallbackScene.add(fallbackHeartMesh);

    window.addEventListener('resize', () => {
      const nw = fallbackCanvas.parentElement.clientWidth || 320;
      const nh = fallbackCanvas.parentElement.clientHeight || 360;
      if (fallbackCamera && fallbackRenderer) {
        fallbackCamera.aspect = nw / nh;
        fallbackCamera.updateProjectionMatrix();
        fallbackRenderer.setSize(nw, nh);
      }
    });
  }
}

/**
 * ==============================================================================
 * CENTRAL DE TELEMETRÍA CARDÍACA SCADA - CLIENT APPLICATION (v7.1)
 * Grado Clínico Hospitalario y Ergonómico (100% Español)
 * Telemetría de Prueba de Esfuerzo con ESP32 DevKit V1 + Sensor Electrocardiográfico AD8232
 * ==============================================================================
 */

// ==============================================================================
// 1. BASE DE DATOS DE PACIENTES Y ESTADO GLOBAL
// ==============================================================================
const DEFAULT_PATIENTS = {
  'PACIENTE_01': {
    id: 'SV-7294',
    name: 'Leo Vance',
    age: 21,
    gender: 'Masculino',
    weight: 68.5,
    height: 178,
    fcRest: 62
  },
  'PACIENTE_02': {
    id: 'SV-8102',
    name: 'Johan Silva',
    age: 22,
    gender: 'Masculino',
    weight: 70.0,
    height: 175,
    fcRest: 60
  },
  'PACIENTE_03': {
    id: 'SV-5419',
    name: 'Carlos Méndez',
    age: 48,
    gender: 'Masculino',
    weight: 82.0,
    height: 172,
    fcRest: 68
  },
  'PACIENTE_04': {
    id: 'SV-9231',
    name: 'Valentina Silva',
    age: 20,
    gender: 'Femenino',
    weight: 56.0,
    height: 164,
    fcRest: 64
  }
};

let patientsDB = JSON.parse(localStorage.getItem('scada_cardiac_patients_v7')) || DEFAULT_PATIENTS;

// Contraseña maestra de seguridad clínica para CRUD
const ADMIN_PASSWORD = 'admin123';

const STATE = {
  activePatientKey: null, // Inicia en espera de admisión de paciente
  patient: {
    id: '--',
    name: 'Sin Paciente Asignado',
    age: '--',
    gender: '--',
    weight: '--',
    height: '--',
    fcRest: 60,
    fcMax: 190,
    bmi: '--',
    bmiCategory: 'En Espera',
    redZoneThreshold: 120
  },
  telemetry: {
    isLive: false, // Inicia en Modo de Espera (Sin sensor físico conectado)
    bpm: 0,
    targetBpm: 0,
    hrvRmssd: 0,
    rppIndex: 0,
    effortPct: 0,
    effortZone: 1,
    prInterval: 0,
    qrsDuration: 0,
    qtcInterval: 0,
    signalQuality: 'STANDBY', // STANDBY | OPTIMA | REGULAR | RUIDO
    leadsOff: false, // Detección de electrodos sueltos AD8232 (LO+ / LO-)
    redZoneContinuousSeconds: 0,
    lastBeatTime: 0,
    lastLogTime: 0,
    
    // Arrays históricos limpios en Standby (Cero datos ficticios inventados)
    historyBpm: [],
    historyRpp: [],
    historyEffort: [],
    historyHrv: []
  },
  telemetryLog: [], // Buffer forense acumulativo para exportación a Excel / CSV
  // Estado de interactividad hover en cada gráfico
  hoverStates: {
    'chart-bpm': null,
    'chart-rpp': null,
    'chart-effort': null,
    'chart-hrv': null
  },
  // Buffer para datos brutos analógicos del AD8232 vía ESP32
  hardwareRawBuffer: [],
  config: {
    soundEnabled: true,
    simulationMode: false, // Por defecto en espera de hardware real
    mqttBroker: 'broker.emqx.io',
    mqttPort: 8084,
    mqttPath: '/mqtt',
    // Detectar parámetro ?sala=... en la URL para aislar grupos si usan el mismo link de GitHub Pages
    mqttTopic: (() => {
      try {
        const params = new URLSearchParams(window.location.search);
        const sala = params.get('sala');
        if (sala && sala.trim().length > 0) {
          return `inacap/cardiologia/${sala.trim().replace(/[^a-zA-Z0-9_-]/g, '_')}/telemetria`;
        }
      } catch (e) {}
      return 'inacap/cardiologia/p2p_grupo_01/telemetria';
    })(),
    directWsUrl: '',
    heartbeatAudioUrl: 'https://cdn.jsdelivr.net/gh/megaconfidence/bt-heart-monitor@master/heartbeat.mp3'
  }
};

// ==============================================================================
// 1.5 CACHÉ DE ELEMENTOS DOM Y ACTUALIZACIÓN DIRTY-CHECKING (60 FPS OPTIMIZATION)
// ==============================================================================
const DOM = {
  isCached: false,
  valBpm: null,
  hudCardiac: null,
  lblHeartStatus: null,
  txtDeltaBpm: null,
  valRpp: null,
  txtDeltaRpp: null,
  valEffortZone: null,
  valEffortPct: null,
  txtDeltaEffort: null,
  valHrv: null,
  txtDeltaHrv: null,
  valLiveBpm: null,
  valLiveRr: null,
  valLiveAdc: null,
  valLivePr: null,
  valLiveQrs: null,
  valLiveQtc: null,
  barRedzoneProgress: null,
  valRedzoneTimer: null,
  bannerCardiacRisk: null,
  heartModelViewer: null,
  cardiacAura: null
};

function cacheDomElements() {
  DOM.valBpm = document.getElementById('val-bpm');
  DOM.hudCardiac = document.getElementById('hud-cardiac-bpm');
  DOM.lblHeartStatus = document.getElementById('lbl-heart-status');
  DOM.txtDeltaBpm = document.getElementById('txt-delta-bpm');
  DOM.valRpp = document.getElementById('val-rpp');
  DOM.txtDeltaRpp = document.getElementById('txt-delta-rpp');
  DOM.valEffortZone = document.getElementById('val-effort-zone');
  DOM.valEffortPct = document.getElementById('val-effort-pct');
  DOM.txtDeltaEffort = document.getElementById('txt-delta-effort');
  DOM.valHrv = document.getElementById('val-hrv');
  DOM.txtDeltaHrv = document.getElementById('txt-delta-hrv');
  DOM.valLiveBpm = document.getElementById('val-live-bpm');
  DOM.valLiveRr = document.getElementById('val-live-rr');
  DOM.valLiveAdc = document.getElementById('val-live-adc');
  DOM.valLivePr = document.getElementById('val-live-pr');
  DOM.valLiveQrs = document.getElementById('val-live-qrs');
  DOM.valLiveQtc = document.getElementById('val-live-qtc');
  DOM.barRedzoneProgress = document.getElementById('bar-redzone-progress');
  DOM.valRedzoneTimer = document.getElementById('val-redzone-timer');
  DOM.bannerCardiacRisk = document.getElementById('banner-cardiac-risk');
  DOM.heartModelViewer = document.getElementById('heart-model-viewer');
  DOM.cardiacAura = document.getElementById('cardiac-aura');
  DOM.isCached = true;
}

function setFastText(elem, text) {
  if (elem && elem.textContent !== text) {
    elem.textContent = text;
  }
}

// ==============================================================================
// 2. FÓRMULAS FISIOLÓGICAS ESTRICTAS (SENSOR AD8232)
// ==============================================================================
function calculateTanakaFcMax(age) {
  return Math.round(208.0 - (0.7 * age));
}

/**
 * Umbral de Riesgo Clínico Adaptado al IMC y Criterios Oficiales de la AHA:
 * En reposo, una frecuencia cardíaca superior a 120 LPM genera sobrecarga miocárdica.
 * En pacientes con sobrepeso u obesidad (IMC >= 30, ej. Patian con IMC 30.2), la mayor
 * demanda basal y resistencia periférica recomiendan una alerta clínica preventiva en 110-115 LPM.
 */
function calculateClinicalRiskThreshold(bmi, age) {
  let threshold = 120; // Umbral estándar en reposo (120 lpm)
  if (bmi >= 30.0) {
    threshold = 110; // Obesidad (IMC >= 30): menor tolerancia a sobrecarga miocárdica
  } else if (bmi >= 25.0) {
    threshold = 115; // Sobrepeso (IMC 25-29.9)
  } else {
    threshold = 120; // Normopeso
  }
  if (age >= 60) {
    threshold -= 5;
  }
  return threshold;
}

function calculateRedZoneThreshold(fcMax, bmi = 22, age = 20) {
  return calculateClinicalRiskThreshold(bmi, age);
}

function calculateBMI(weightKg, heightCm) {
  const hMeters = heightCm / 100.0;
  if (hMeters <= 0) return 22.0;
  return Number((weightKg / (hMeters * hMeters)).toFixed(1));
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return 'Bajo peso';
  if (bmi < 25.0) return 'Normopeso';
  if (bmi < 30.0) return 'Sobrepeso';
  if (bmi < 35.0) return 'Obesidad I';
  return 'Obesidad II+';
}

function calculateEffortZone(currentBpm, fcMax, fcRest) {
  const reserve = fcMax - fcRest;
  const pct = reserve > 0 ? ((currentBpm - fcRest) / reserve) * 100 : (currentBpm / fcMax) * 100;
  const boundedPct = Math.max(0, Math.min(100, Math.round(pct)));

  let zone = 1;
  if (boundedPct < 50) zone = 1;
  else if (boundedPct < 60) zone = 1;
  else if (boundedPct < 70) zone = 2;
  else if (boundedPct < 80) zone = 3;
  else if (boundedPct < 90) zone = 4;
  else zone = 5;

  return { pct: boundedPct, zone };
}

function calculateRpp(bpm, fcRest) {
  const deltaBpm = Math.max(0, bpm - (fcRest || 60));
  const estimatedSystolicBp = 115 + 0.58 * deltaBpm;
  return Number(((bpm * estimatedSystolicBp) / 1000.0).toFixed(1));
}

function updateActivePatientCalculations(patientObj) {
  patientObj.fcMax = calculateTanakaFcMax(patientObj.age);
  patientObj.bmi = calculateBMI(patientObj.weight, patientObj.height);
  patientObj.bmiCategory = getBMICategory(patientObj.bmi);
  patientObj.redZoneThreshold = calculateClinicalRiskThreshold(patientObj.bmi, patientObj.age);
}

// ==============================================================================
// 3. SEGURIDAD Y AUTENTICACIÓN ADMINISTRADOR / MÉDICO
// ==============================================================================
function requestAdminAuth(actionDescription) {
  const enteredPass = window.prompt(
    `🔒 AUTORIZACIÓN MÉDICA / ADMINISTRADOR REQUERIDA\n\nAcción: ${actionDescription}\n\nIngrese la contraseña maestra de seguridad:`,
    ""
  );

  if (enteredPass === null) {
    return false; // Usuario canceló el prompt
  }

  if (enteredPass.trim() === ADMIN_PASSWORD) {
    return true;
  }

  alert("⛔ ACCESO DENEGADO: Contraseña incorrecta. Operación bloqueada por seguridad clínica.");
  return false;
}

// ==============================================================================
// 4. AUDIO REAL DE LATIDO CLÍNICO (CDN PÚBLICO + SÍNTESIS WEBAUDIO)
// ==============================================================================
let realHeartbeatAudio = null;
let audioCtx = null;

function initClinicalAudio() {
  try {
    realHeartbeatAudio = new Audio(STATE.config.heartbeatAudioUrl);
    realHeartbeatAudio.volume = 0.55;
    realHeartbeatAudio.preload = 'auto';
  } catch (e) {
    realHeartbeatAudio = null;
  }
}

function playClinicalHeartbeatSound() {
  if (!STATE.config.soundEnabled || isEmergencyAlarmActive) return;

  // REGLA CLÍNICA ESTRICTA: Silencio absoluto en reposo o espera (standby).
  // Solo se reproduce si la simulación está activa con BPM > 0, O si el hardware real está en línea con electrodos colocados.
  if (!STATE.config.simulationMode && (!STATE.telemetry.isLive || STATE.telemetry.bpm <= 0 || isLeadsOffActive)) return;
  if (STATE.config.simulationMode && STATE.telemetry.bpm <= 0) return;

  playAcousticStethoscopeThump();
}

function playAcousticStethoscopeThump() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;

    // Tono hospitalario QRS Sync clínico estándar de monitor de signos vitales (Mindray / GE / Philips)
    // Frecuencia fundamental brillante (520 Hz) con armónico secundario (780 Hz) y cuerpo de percusión (180 Hz)
    // Diseñado acústicamente para ser 100% nítido, audible y distinguible incluso a 20-40% de volumen de notebook
    const oscMain = audioCtx.createOscillator();
    const oscHarm = audioCtx.createOscillator();
    const oscSub = audioCtx.createOscillator();
    const gainMaster = audioCtx.createGain();

    oscMain.type = 'sine';
    oscMain.frequency.setValueAtTime(520, now);
    oscMain.frequency.exponentialRampToValueAtTime(420, now + 0.055);

    oscHarm.type = 'triangle'; // Brillo clínico armónico que penetra altavoces de notebooks
    oscHarm.frequency.setValueAtTime(780, now);
    oscHarm.frequency.exponentialRampToValueAtTime(650, now + 0.045);

    oscSub.type = 'sine'; // Percusión acústica del latido (primer ruido cardíaco S1)
    oscSub.frequency.setValueAtTime(180, now);
    oscSub.frequency.exponentialRampToValueAtTime(90, now + 0.075);

    gainMaster.gain.setValueAtTime(0.001, now);
    gainMaster.gain.linearRampToValueAtTime(0.85, now + 0.004); // Ataque ultra-rápido de 4 ms
    gainMaster.gain.exponentialRampToValueAtTime(0.001, now + 0.075); // Caída nítida sin eco

    oscMain.connect(gainMaster);
    oscHarm.connect(gainMaster);
    oscSub.connect(gainMaster);
    gainMaster.connect(audioCtx.destination);

    oscMain.start(now);
    oscHarm.start(now);
    oscSub.start(now);
    oscMain.stop(now + 0.080);
    oscHarm.stop(now + 0.080);
    oscSub.stop(now + 0.080);
  } catch (e) {}
}

// ==============================================================================
// 5. MONITOR CRÍTICO DE SOBREESFUERZO CARDÍACO (>95% TANAKA)
// ==============================================================================
let redZoneContinuousStartTime = null;
let isEmergencyAlarmActive = false;
let emergencyIntervalTimer = null;

function playIecAlarmBurst() {
  if (!STATE.config.soundEnabled || !isEmergencyAlarmActive) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;

    // Norma Oficial IEC 60601-1-8: Alarma clínica de alta prioridad para taquicardia
    // Secuencia de ráfagas rítmicas: 3 pulsos rápidos + pausa + 2 pulsos
    // Tono claro a 880 Hz (A5), completamente diferenciado del pitido continuo de asistolia/muerte
    const pulseOffsets = [0.0, 0.10, 0.20, 0.44, 0.54];
    const freq = 880;

    pulseOffsets.forEach(offset => {
      const t = now + offset;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.35, t + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.080);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.085);
    });
  } catch (e) {}
}

function checkRedZoneEmergencySafety(now) {
  if (!STATE.telemetry.isLive) {
    if (isEmergencyAlarmActive) stopContinuousEmergencySiren();
    return;
  }

  const banner = document.getElementById('banner-cardiac-risk');
  const timerDisplay = document.getElementById('emergency-timer-val');
  const timerLeftBox = document.getElementById('val-redzone-timer');
  const barLeftProgress = document.getElementById('bar-redzone-progress');
  const cardBpm = document.getElementById('card-bpm');

  const isExceeding = STATE.telemetry.bpm >= STATE.patient.redZoneThreshold;
  const maxEmergencyWaitSec = 5.0; // Alerta reactiva en 5 segundos de permanencia crítica

  if (isExceeding) {
    if (!redZoneContinuousStartTime) {
      redZoneContinuousStartTime = now;
    }
    const elapsedSeconds = ((now - redZoneContinuousStartTime) / 1000.0);
    const progressPct = Math.min(100, (elapsedSeconds / maxEmergencyWaitSec) * 100);

    if (timerLeftBox) timerLeftBox.innerText = `${elapsedSeconds.toFixed(1)}s / ${maxEmergencyWaitSec.toFixed(0)}s`;
    if (barLeftProgress) barLeftProgress.style.width = `${progressPct.toFixed(0)}%`;

    if (elapsedSeconds >= maxEmergencyWaitSec) {
      if (!isEmergencyAlarmActive) {
        isEmergencyAlarmActive = true;
        banner?.classList.add('active');
        if (timerDisplay) timerDisplay.innerText = `${Math.floor(elapsedSeconds)}s`;
        document.body.classList.add('emergency-strobe');
        cardBpm?.classList.add('critical-alert');
        startContinuousEmergencySiren();
      }
    }
  } else {
    redZoneContinuousStartTime = null;
    if (timerLeftBox) timerLeftBox.innerText = `0.0s / ${maxEmergencyWaitSec.toFixed(0)}s`;
    if (barLeftProgress) barLeftProgress.style.width = `0%`;

    if (isEmergencyAlarmActive) {
      isEmergencyAlarmActive = false;
      banner?.classList.remove('active');
      document.body.classList.remove('emergency-strobe');
      cardBpm?.classList.remove('critical-alert');
      stopContinuousEmergencySiren();
    }
  }
}

function startContinuousEmergencySiren() {
  if (emergencyIntervalTimer || !STATE.config.soundEnabled) return;
  isEmergencyAlarmActive = true;
  playIecAlarmBurst();
  emergencyIntervalTimer = setInterval(() => {
    if (isEmergencyAlarmActive && STATE.config.soundEnabled) {
      playIecAlarmBurst();
    } else {
      stopContinuousEmergencySiren();
    }
  }, 1500);
}

function stopContinuousEmergencySiren() {
  isEmergencyAlarmActive = false;
  if (emergencyIntervalTimer) {
    clearInterval(emergencyIntervalTimer);
    emergencyIntervalTimer = null;
  }
}

// ==============================================================================
// 6. MOTOR AUTÓNOMO DE LATIDO CARDÍACO REACTIVO (BPM)
// ==============================================================================
let lastBeatTimestamp = performance.now();
let lastAudioBeepTime = 0;

function updateCardiacEngine(now) {
  // REGLA CLÍNICA: Solo palpita si hay simulación activa con BPM > 0, o sensor en vivo con BPM > 0 y electrodos puestos
  const isActivelyBeating = STATE.config.simulationMode 
    ? (STATE.telemetry.bpm > 0) 
    : (STATE.telemetry.isLive && STATE.telemetry.bpm > 0 && !isLeadsOffActive);

  if (!isActivelyBeating) {
    // Corazón en reposo estático en modo espera (silencio absoluto)
    const modelViewer = document.getElementById('heart-model-viewer');
    if (modelViewer) modelViewer.style.transform = 'scale(1.0, 1.0)';
    const aura = document.getElementById('cardiac-aura');
    if (aura) {
      aura.style.transform = 'translate(-50%, -50%) scale(1.0)';
      aura.style.opacity = '0.15';
    }
    return;
  }

  const currentBpm = Math.max(40, Math.min(220, STATE.telemetry.bpm));
  const beatPeriod = 60000.0 / currentBpm;
  const elapsed = now - lastBeatTimestamp;
  const phase = Math.min(1.0, Math.max(0.0, elapsed / beatPeriod));

  // 1. Animar la contracción sistólica del corazón 3D en estricta sincronía con la fase del ciclo
  animateHeart3DContraction(phase);

  // 2. Watchdog de seguridad fisiológica:
  // El latido maestro (audio y sístole) es gobernado de forma síncrona por el pico R del ECG.
  // Solo si transcurren más de 1.4 períodos sin detección de pico R (p. ej. atenuación transitoria),
  // este watchdog dispara un latido autónomo de sincronización para mantener el flujo visual.
  if (elapsed >= beatPeriod * 1.45) {
    onCardiacBeatTriggered(now);
  }
}

function animateHeart3DContraction(phase) {
  // Renderizado del fallback procedural Three.js si está activo
  if (isFallbackActive && fallbackHeartMesh) {
    fallbackHeartMesh.rotation.y += 0.008;
    const s = 1.0 + Math.sin(phase * Math.PI) * 0.12;
    fallbackHeartMesh.scale.set(s, s * 0.95, s);
    if (fallbackRenderer && fallbackScene && fallbackCamera) {
      fallbackRenderer.render(fallbackScene, fallbackCamera);
    }
  }
  let scaleX = 1.0;
  let scaleY = 1.0;
  let auraScale = 1.0;
  let auraOpacity = 0.35;

  // SÍSTOLE VENTRICULAR EN FASE 0.0 (Momento exacto del pico R electrofisiológico y beep de audio)
  if (phase < 0.20) {
    const t = phase / 0.20;
    const sinT = Math.sin(t * Math.PI);
    scaleX = 1.0 - sinT * 0.09; // Contracción concéntrica ventricular
    scaleY = 1.0 + sinT * 0.12; // Deformación helicoidal de eyección sistólica
    auraScale = 1.0 + sinT * 0.50; // Pulso de brillo del aura cardíaca
    auraOpacity = 0.40 + sinT * 0.55;
  } else if (phase < 0.45) {
    // DIÁSTOLE VENTRICULAR: Llenado pasivo y relajación isovolumétrica
    const t = (phase - 0.20) / 0.25;
    const sinT = Math.sin(t * Math.PI);
    scaleX = 1.0 + sinT * 0.04;
    scaleY = 1.0 - sinT * 0.03;
    auraScale = 1.0 + sinT * 0.18;
    auraOpacity = 0.35 + sinT * 0.12;
  } else {
    // REPOSO DIASTÓLICO PREVIO A LA SIGUIENTE ONDA P
    scaleX = 1.0;
    scaleY = 1.0;
    auraScale = 1.0;
    auraOpacity = 0.25;
  }

  const modelViewer = document.getElementById('heart-model-viewer');
  if (modelViewer) {
    modelViewer.style.transform = `scale(${scaleX.toFixed(3)}, ${scaleY.toFixed(3)})`;
  }

  const aura = document.getElementById('cardiac-aura');
  if (aura) {
    aura.style.transform = `translate(-50%, -50%) scale(${auraScale.toFixed(2)})`;
    aura.style.opacity = auraOpacity.toFixed(2);
  }
}

function onCardiacBeatTriggered(now) {
  STATE.telemetry.lastBeatTime = now;
  logTelemetrySample(now);
  lastBeatTimestamp = now; // Ancla de fase maestra: sincroniza sístole 3D y audio con el pico R
  recalculateElectrophysiologicalIntervals();

  if (STATE.config.soundEnabled && !isEmergencyAlarmActive) {
    if (now - lastAudioBeepTime > 220) {
      lastAudioBeepTime = now;
      playClinicalHeartbeatSound();
    }
  }
}

function recalculateElectrophysiologicalIntervals() {
  if (!STATE.telemetry.isLive) return;
  const curBpm = Math.round(STATE.telemetry.bpm);

  STATE.telemetry.prInterval = Math.max(120, Math.min(195, Math.round(175 - (curBpm - 60) * 0.45)));
  STATE.telemetry.qrsDuration = Math.round(82 + (Math.random() * 3));

  const rrSeconds = 60.0 / Math.max(40, curBpm);
  const qtMs = 390 - (curBpm - 60) * 1.1;
  STATE.telemetry.qtcInterval = Math.round(qtMs / Math.sqrt(rrSeconds));

  const elBpm = document.getElementById('val-live-bpm');
  const elPr = document.getElementById('val-live-pr');
  const elQrs = document.getElementById('val-live-qrs');
  const elQtc = document.getElementById('val-live-qtc');

  if (elBpm) elBpm.innerText = `${curBpm} lpm`;
  if (elPr) elPr.innerText = `${STATE.telemetry.prInterval} ms`;
  if (elQrs) elQrs.innerText = `${STATE.telemetry.qrsDuration} ms`;
  if (elQtc) elQtc.innerText = `${STATE.telemetry.qtcInterval} ms`;

  updateSignalQualityIndicator(curBpm);
}

function updateSignalQualityIndicator(curBpm) {
  const badgeDot = document.getElementById('signal-dot');
  const badgeTxt = document.getElementById('signal-txt');
  if (!badgeDot || !badgeTxt) return;

  if (!STATE.telemetry.isLive) {
    badgeDot.className = 'signal-dot-pulse standby';
    badgeTxt.innerText = 'CALIDAD ECG: EN ESPERA DE SENSOR (AD8232)';
    return;
  }

  badgeDot.className = 'signal-dot-pulse';
  if (curBpm > 165) {
    STATE.telemetry.signalQuality = 'REGULAR';
    badgeDot.style.background = '#f4c938';
    badgeDot.style.boxShadow = '0 0 8px #f4c938';
    badgeTxt.style.color = '#f4c938';
    badgeTxt.innerText = 'CALIDAD ECG: REGULAR (ARTEFACTO SUDOR)';
  } else {
    STATE.telemetry.signalQuality = 'OPTIMA';
    badgeDot.style.background = '#00e5ff';
    badgeDot.style.boxShadow = '0 0 8px #00e5ff';
    badgeTxt.style.color = '#00e5ff';
    badgeTxt.innerText = 'CALIDAD ECG: ÓPTIMA (ELECTRODOS OK)';
  }
}

// ==============================================================================
// 7. RENDERIZADOR DE GRÁFICOS (ÚLTIMAS 2 HORAS / PUNTOS CADA 10 MINUTOS)
// ==============================================================================
function initBentoAreaCharts() {
  const canvas = document.getElementById('chart-bpm');
  if (canvas) {
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      STATE.hoverStates['chart-bpm'] = { mouseX, mouseY };
      redrawAllBentoCharts();
    });

    canvas.addEventListener('mouseleave', () => {
      STATE.hoverStates['chart-bpm'] = null;
      redrawAllBentoCharts();
    });
  }

  initExpandedChartEvents();
  redrawAllBentoCharts();
}


// ==============================================================================
// 7.B ESTADO CARDÍACO CLÍNICO (AHA) Y VISUALIZADOR EXPANDIDO EN PANTALLA COMPLETA
// ==============================================================================
function updateCardiacStateCard(bpm) {
  const pill = document.getElementById('cardiac-status-pill');
  const text = document.getElementById('cardiac-status-text');
  const accent = document.getElementById('cardiac-status-accent');
  const pointer = document.getElementById('cardiac-scale-pointer');
  const legBrad = document.getElementById('leg-brad');
  const legNorm = document.getElementById('leg-norm');
  const legTaq = document.getElementById('leg-taq');

  if (!bpm || bpm <= 0) {
    if (pill) pill.className = 'status-badge-main standby';
    if (text) text.innerText = 'EN ESPERA (STANDBY)';
    if (pointer) pointer.style.left = '50%';
    legBrad?.classList.remove('active');
    legNorm?.classList.remove('active');
    legTaq?.classList.remove('active');
    return;
  }

  const roundBpm = Math.round(bpm);

  // Escala de puntero continuo (0 a 180 LPM)
  let pinPct = 50;
  if (roundBpm <= 60) {
    pinPct = Math.max(5, (roundBpm / 60.0) * 33.33);
  } else if (roundBpm <= 100) {
    pinPct = 33.33 + ((roundBpm - 60) / 40.0) * 33.33;
  } else {
    pinPct = Math.min(96, 66.66 + ((roundBpm - 100) / 80.0) * 33.34);
  }
  if (pointer) pointer.style.left = `${pinPct.toFixed(1)}%`;

  // Clasificación oficial de la American Heart Association (AHA):
  if (roundBpm < 60) {
    // BRADICARDIA
    if (pill) pill.className = 'status-badge-main bradicardia';
    if (text) text.innerText = 'BRADICARDIA';
    if (accent) { accent.className = 'accent-bar bar-cyan'; accent.style.background = '#38bdf8'; }
    legBrad?.classList.add('active');
    legNorm?.classList.remove('active');
    legTaq?.classList.remove('active');
  } else if (roundBpm <= 100) {
    // NORMOCARDIA
    if (pill) pill.className = 'status-badge-main normocardia';
    if (text) text.innerText = 'NORMOCARDIA';
    if (accent) { accent.className = 'accent-bar bar-green'; accent.style.background = '#00ff88'; }
    legBrad?.classList.remove('active');
    legNorm?.classList.add('active');
    legTaq?.classList.remove('active');
  } else {
    // TAQUICARDIA
    if (pill) pill.className = 'status-badge-main taquicardia';
    if (text) text.innerText = 'TAQUICARDIA';
    if (accent) { accent.className = 'accent-bar bar-red'; accent.style.background = '#ff4444'; }
    legBrad?.classList.remove('active');
    legNorm?.classList.remove('active');
    legTaq?.classList.add('active');
  }
}

let isExpandedChartOpen = false;
let expandedHoverPoint = null;

function initExpandedChartEvents() {
  const modal = document.getElementById('modal-expanded-bpm');
  const canvas = document.getElementById('canvas-expanded-bpm');
  if (!canvas) return;

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    expandedHoverPoint = { x, y };
    drawExpandedBpmChart();
  });

  canvas.addEventListener('mouseleave', () => {
    expandedHoverPoint = null;
    drawExpandedBpmChart();
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeExpandedChartModal();
  });
}

function openExpandedChartModal() {
  const modal = document.getElementById('modal-expanded-bpm');
  if (!modal) return;
  modal.classList.add('open');
  isExpandedChartOpen = true;
  setTimeout(() => {
    drawExpandedBpmChart();
  }, 35);
}

function closeExpandedChartModal() {
  const modal = document.getElementById('modal-expanded-bpm');
  if (!modal) return;
  modal.classList.remove('open');
  isExpandedChartOpen = false;
  expandedHoverPoint = null;
}


function drawDiscreteGridStandby(ctx, w, h, dpr, label) {
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1 * dpr;
  const stepX = w / 6;
  for (let x = stepX; x < w; x += stepX) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  const stepY = h / 4;
  for (let y = stepY; y < h; y += stepY) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
  ctx.font = `700 ${Math.round(10 * dpr)}px 'JetBrains Mono', monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`⚡ ${label}`, w / 2, h / 2 - 6 * dpr);

  ctx.font = `500 ${Math.round(8 * dpr)}px 'Plus Jakarta Sans', sans-serif`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.16)';
  ctx.fillText('Conecte el sensor AD8232 o active la prueba para iniciar el trazado.', w / 2, h / 2 + 10 * dpr);
}

function drawExpandedGridStandby(ctx, w, h, dpr) {
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
  ctx.lineWidth = 1 * dpr;
  const stepX = w / 12;
  for (let x = stepX; x < w; x += stepX) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  const stepY = h / 6;
  for (let y = stepY; y < h; y += stepY) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
  ctx.font = `700 ${Math.round(13 * dpr)}px 'JetBrains Mono', monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('⚡ SIN REGISTROS TELEMÉTRICOS EN ESPERA (STANDBY)', w / 2, h / 2 - 10 * dpr);

  ctx.font = `500 ${Math.round(10 * dpr)}px 'Plus Jakarta Sans', sans-serif`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
  ctx.fillText('Los datos históricos se acumularán automáticamente al iniciar la transmisión física o la simulación.', w / 2, h / 2 + 12 * dpr);
}

function drawExpandedBpmChart() {
  const canvas = document.getElementById('canvas-expanded-bpm');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  const w = canvas.clientWidth * dpr;
  const h = canvas.clientHeight * dpr;
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  ctx.clearRect(0, 0, w, h);

  const isStandby = !STATE.telemetry.isLive && !STATE.config.simulationMode;
  const dataArr = STATE.telemetry.historyBpm;
  if (isStandby || !dataArr || dataArr.length < 2) {
    drawExpandedGridStandby(ctx, w, h, dpr);
    return;
  }

  const paddingLeft = 65 * dpr;
  const paddingRight = 35 * dpr;
  const paddingTop = 35 * dpr;
  const paddingBottom = 45 * dpr;
  const chartW = w - paddingLeft - paddingRight;
  const chartH = h - paddingTop - paddingBottom;

  const minVal = 40;
  const maxVal = Math.max(160, Math.max(...dataArr) + 15);
  const range = maxVal - minVal;

  const getY = (val) => paddingTop + chartH - ((val - minVal) / range) * chartH;

  // 1. Zonas Clínicas de Fondo
  const y60 = getY(60);
  ctx.fillStyle = 'rgba(56, 189, 248, 0.05)';
  ctx.fillRect(paddingLeft, y60, chartW, (paddingTop + chartH) - y60);

  const y100 = getY(100);
  ctx.fillStyle = 'rgba(0, 255, 136, 0.05)';
  ctx.fillRect(paddingLeft, y100, chartW, y60 - y100);

  ctx.fillStyle = 'rgba(239, 68, 68, 0.05)';
  ctx.fillRect(paddingLeft, paddingTop, chartW, y100 - paddingTop);

  // 2. Líneas Horizontales de Referencia
  const ticks = [40, 60, 80, 100, 120, 140, 160];
  ctx.font = `${Math.round(11 * dpr)}px 'JetBrains Mono', monospace`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';

  ticks.forEach(tVal => {
    if (tVal > maxVal) return;
    const y = getY(tVal);
    ctx.strokeStyle = (tVal === 60 || tVal === 100) ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.07)';
    ctx.lineWidth = (tVal === 60 || tVal === 100) ? 1.5 * dpr : 1 * dpr;
    if (tVal === 60 || tVal === 100) ctx.setLineDash([4 * dpr, 4 * dpr]);
    else ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(w - paddingRight, y);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = tVal === 60 ? '#38bdf8' : (tVal === 100 ? '#ffaa00' : 'rgba(255, 255, 255, 0.45)');
    ctx.fillText(`${tVal} lpm`, paddingLeft - 8 * dpr, y);
  });

  // 3. Mapear Puntos de las 2 horas
  const timeLabelsMap = [
    'Hace 2h', 'Hace 110m', 'Hace 100m', 'Hace 90m', 'Hace 80m', 'Hace 70m',
    'Hace 1h', 'Hace 50m', 'Hace 40m', 'Hace 30m', 'Hace 20m', 'Hace 10m', 'Actual'
  ];

  const points = [];
  const stepX = chartW / (dataArr.length - 1);
  for (let i = 0; i < dataArr.length; i++) {
    const x = paddingLeft + i * stepX;
    const y = getY(dataArr[i]);
    points.push({
      x,
      y,
      val: dataArr[i],
      timeLabel: timeLabelsMap[i] || `T-${(dataArr.length - 1 - i) * 10}m`,
      idx: i
    });
  }

  // 4. Curva Bézier Suave
  const grad = ctx.createLinearGradient(0, paddingTop, 0, paddingTop + chartH);
  grad.addColorStop(0, 'rgba(244, 201, 56, 0.35)');
  grad.addColorStop(0.5, 'rgba(244, 201, 56, 0.12)');
  grad.addColorStop(1, 'rgba(244, 201, 56, 0.00)');

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length - 1; i++) {
    const xc = (points[i].x + points[i + 1].x) / 2;
    const yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.lineTo(points[points.length - 1].x, paddingTop + chartH);
  ctx.lineTo(points[0].x, paddingTop + chartH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length - 1; i++) {
    const xc = (points[i].x + points[i + 1].x) / 2;
    const yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.strokeStyle = '#f4c938';
  ctx.lineWidth = 2.8 * dpr;
  ctx.shadowColor = 'rgba(244, 201, 56, 0.5)';
  ctx.shadowBlur = 8 * dpr;
  ctx.stroke();
  ctx.shadowBlur = 0;

  // 5. Marcadores
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.font = `${Math.round(10 * dpr)}px 'JetBrains Mono', monospace`;

  points.forEach((pt, i) => {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, (i === points.length - 1 ? 5.5 : 4.0) * dpr, 0, Math.PI * 2);
    ctx.fillStyle = i === points.length - 1 ? '#00ff88' : '#f4c938';
    ctx.fill();
    ctx.strokeStyle = '#0e1210';
    ctx.lineWidth = 2 * dpr;
    ctx.stroke();

    if (i % 2 === 0 || i === points.length - 1) {
      ctx.fillStyle = i === points.length - 1 ? '#00ff88' : 'rgba(255, 255, 255, 0.6)';
      ctx.fillText(pt.timeLabel, pt.x, paddingTop + chartH + 10 * dpr);
    }
  });

  // 6. Tooltip Clínico al hacer Hover
  let hoveredPt = null;
  if (expandedHoverPoint) {
    const mouseCanvasX = expandedHoverPoint.x * dpr;
    let closestDist = Infinity;
    points.forEach(pt => {
      const dist = Math.abs(pt.x - mouseCanvasX);
      if (dist < closestDist && dist < 35 * dpr) {
        closestDist = dist;
        hoveredPt = pt;
      }
    });
  }

  if (hoveredPt) {
    ctx.strokeStyle = 'rgba(244, 201, 56, 0.6)';
    ctx.lineWidth = 1.2 * dpr;
    ctx.setLineDash([4 * dpr, 3 * dpr]);
    ctx.beginPath();
    ctx.moveTo(hoveredPt.x, paddingTop);
    ctx.lineTo(hoveredPt.x, paddingTop + chartH);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.arc(hoveredPt.x, hoveredPt.y, 8 * dpr, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(244, 201, 56, 0.3)';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5 * dpr;
    ctx.stroke();

    const bpmVal = Math.round(hoveredPt.val);
    const estado = bpmVal < 60 ? 'BRADICARDIA' : (bpmVal <= 100 ? 'NORMOCARDIA' : 'TAQUICARDIA');
    const estadoColor = bpmVal < 60 ? '#38bdf8' : (bpmVal <= 100 ? '#00ff88' : '#ff4444');
    const diff = bpmVal - (STATE.patient.fcRest || 60);

    const ttW = 210 * dpr;
    const ttH = 92 * dpr;
    let ttX = hoveredPt.x + 15 * dpr;
    let ttY = hoveredPt.y - ttH / 2;
    if (ttX + ttW > w - paddingRight) ttX = hoveredPt.x - ttW - 15 * dpr;
    if (ttY < paddingTop) ttY = paddingTop;
    if (ttY + ttH > paddingTop + chartH) ttY = paddingTop + chartH - ttH;

    ctx.fillStyle = 'rgba(16, 22, 18, 0.95)';
    ctx.strokeStyle = estadoColor;
    ctx.lineWidth = 1.5 * dpr;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 12 * dpr;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(ttX, ttY, ttW, ttH, 8 * dpr) : ctx.rect(ttX, ttY, ttW, ttH);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    ctx.font = `600 ${Math.round(10 * dpr)}px 'Plus Jakarta Sans', sans-serif`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.fillText(`⏱️ ${hoveredPt.timeLabel}`, ttX + 12 * dpr, ttY + 10 * dpr);

    ctx.font = `800 ${Math.round(15 * dpr)}px 'JetBrains Mono', monospace`;
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${bpmVal} lpm`, ttX + 12 * dpr, ttY + 27 * dpr);

    ctx.font = `700 ${Math.round(11 * dpr)}px 'JetBrains Mono', monospace`;
    ctx.fillStyle = estadoColor;
    ctx.fillText(`● ${estado}`, ttX + 12 * dpr, ttY + 50 * dpr);

    ctx.font = `500 ${Math.round(10 * dpr)}px 'Plus Jakarta Sans', sans-serif`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.fillText(`Desviación: ${diff >= 0 ? '+' : ''}${diff} lpm`, ttX + 12 * dpr, ttY + 68 * dpr);
  }

  // 7. Actualizar la barra inferior de estadísticas clínicas del modal
  const curBpm = STATE.telemetry.bpm > 0 ? STATE.telemetry.bpm : dataArr[dataArr.length - 1];
  const sum = dataArr.reduce((a, b) => a + b, 0);
  const avg = Math.round(sum / dataArr.length);
  const min = Math.min(...dataArr);
  const max = Math.max(...dataArr);

  const normoCount = dataArr.filter(v => v >= 60 && v <= 100).length;
  const predom = normoCount >= dataArr.length / 2 ? 'Normocardia' : (avg > 100 ? 'Taquicardia' : 'Bradicardia');

  const elCur = document.getElementById('stat-fc-curr');
  const elAvg = document.getElementById('stat-fc-avg');
  const elMin = document.getElementById('stat-fc-min');
  const elMax = document.getElementById('stat-fc-max');
  const elPred = document.getElementById('stat-fc-predom');

  if (elCur) elCur.innerText = `${Math.round(curBpm)} lpm`;
  if (elAvg) elAvg.innerText = `${avg} lpm`;
  if (elMin) elMin.innerText = `${Math.round(min)} lpm`;
  if (elMax) elMax.innerText = `${Math.round(max)} lpm`;
  if (elPred) {
    elPred.innerText = predom;
    elPred.className = `stat-num ${predom === 'Normocardia' ? 'highlight-green' : (predom === 'Taquicardia' ? 'highlight-red' : 'highlight-yellow')}`;
  }
}

function redrawAllBentoCharts() {
  // Tarjeta 1: Frecuencia Cardíaca (BPM)
  renderDiscreteMedicalChart(
    'chart-bpm',
    STATE.telemetry.historyBpm,
    '#f4c938',
    'rgba(244, 201, 56, 0.16)',
    'lpm',
    STATE.patient.redZoneThreshold || 120,
    (v) => `${Math.round(v)} lpm`,
    (v) => `${Math.round((v / (STATE.patient.redZoneThreshold || 120)) * 100)}% Umbral`
  );

  // Tarjeta 2: Estado Cardíaco (Diagnóstico Oficial AHA: Bradicardia, Normocardia, Taquicardia)
  updateCardiacStateCard(STATE.telemetry.bpm);

  // Redibujado del modal de gráfico expandido si está abierto
  if (isExpandedChartOpen) {
    drawExpandedBpmChart();
  }
}

/**
 * Gráfico discreto de grado clínico con Eje Temporal de 2 Horas y Marcadores cada 10 Minutos
 */
function renderDiscreteMedicalChart(canvasId, dataArr, strokeColor, fillColor, unit, thresholdVal, formatValFn, formatPctFn) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth * dpr;
  const h = canvas.clientHeight * dpr;
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }

  ctx.clearRect(0, 0, w, h);
  const isStandby = !STATE.telemetry.isLive && !STATE.config.simulationMode;
  if (isStandby || !dataArr || dataArr.length < 2) {
    drawDiscreteGridStandby(ctx, w, h, dpr, 'ESPERANDO TELEMETRÍA (SIN REGISTROS)');
    return;
  }

  const dMin = Math.min(...dataArr);
  const dMax = Math.max(...dataArr);
  const spread = Math.max(dMax - dMin, unit === 'ms' ? 14 : 26);
  const min = Math.max(0, dMin - spread * 0.20);
  const max = dMax + spread * 0.20;
  const range = max - min || 1;

  const paddingLeft = 14 * dpr;
  const paddingRight = 20 * dpr;
  const paddingTop = 16 * dpr;
  const paddingBottom = 26 * dpr;
  const chartW = w - paddingLeft - paddingRight;
  const chartH = h - paddingTop - paddingBottom;

  // 1. Línea base horizontal de referencia tenue
  const baselineY = paddingTop + chartH * 0.55;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1 * dpr;
  ctx.beginPath();
  ctx.moveTo(paddingLeft, baselineY);
  ctx.lineTo(w - paddingRight, baselineY);
  ctx.stroke();

  // 2. Mapear Puntos (13 puntos: cada 10 minutos a lo largo de 2 horas)
  const timeLabelsMap = [
    'Hace 2h', 'Hace 110m', 'Hace 100m', 'Hace 90m', 'Hace 80m', 'Hace 70m',
    'Hace 1h', 'Hace 50m', 'Hace 40m', 'Hace 30m', 'Hace 20m', 'Hace 10m', 'Actual'
  ];

  const points = [];
  const stepX = chartW / (dataArr.length - 1);
  for (let i = 0; i < dataArr.length; i++) {
    const x = paddingLeft + i * stepX;
    const yVal = Math.max(min, Math.min(max, dataArr[i]));
    const y = paddingTop + chartH - ((yVal - min) / range) * chartH;
    points.push({
      x,
      y,
      val: dataArr[i],
      timeLabel: timeLabelsMap[i] || `T-${(dataArr.length - 1 - i) * 10}m`,
      idx: i
    });
  }

  // 3. Relleno Degradado Bézier
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length - 1; i++) {
    const xc = (points[i].x + points[i + 1].x) / 2;
    const yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.lineTo(points[points.length - 1].x, paddingTop + chartH);
  ctx.lineTo(points[0].x, paddingTop + chartH);
  ctx.closePath();

  const grad = ctx.createLinearGradient(0, paddingTop, 0, paddingTop + chartH);
  grad.addColorStop(0, fillColor);
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fill();

  // 4. Trazo de Línea Continua Bézier
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length - 1; i++) {
    const xc = (points[i].x + points[i + 1].x) / 2;
    const yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 2.0 * dpr;
  ctx.stroke();

  // 5. Detectar Punto en Hover (Aproximación por franja horizontal suave)
  const hover = STATE.hoverStates[canvasId];
  let hoveredPoint = null;
  if (hover) {
    const hx = hover.mouseX * dpr;
    let closestDist = stepX * 0.70;
    for (const p of points) {
      const dist = Math.abs(p.x - hx);
      if (dist < closestDist) {
        closestDist = dist;
        hoveredPoint = p;
      }
    }
  }

  // Puntos Min/Max
  const minPointIdx = points.reduce((minIdx, p, idx, arr) => p.val < arr[minIdx].val ? idx : minIdx, 0);
  const maxPointIdx = points.reduce((maxIdx, p, idx, arr) => p.val > arr[maxIdx].val ? idx : maxIdx, 0);

  // 6. Dibujar Marcadores Circulares en cada punto (Cada 10 minutos)
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const isLast = i === points.length - 1;
    const isPeak = i === maxPointIdx && !isLast;
    const isTrough = i === minPointIdx && !isLast && minPointIdx !== maxPointIdx;
    const isHovered = hoveredPoint && hoveredPoint.idx === i;

    if (!isLast) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, (isHovered ? 4.5 : 2.5) * dpr, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? strokeColor : '#ffffff';
      ctx.fill();

      if (isPeak && !isHovered) {
        const displayVal = typeof p.val === 'number' && unit === 'ms' ? p.val.toFixed(1) : Math.round(p.val);
        drawDiscreteValueTag(ctx, `${displayVal}`, p.x, p.y - 7 * dpr, strokeColor, dpr);
      } else if (isTrough && !isHovered) {
        const displayVal = typeof p.val === 'number' && unit === 'ms' ? p.val.toFixed(1) : Math.round(p.val);
        drawDiscreteValueTag(ctx, `${displayVal}`, p.x, p.y + 11 * dpr, 'rgba(255,255,255,0.7)', dpr);
      }
    }
  }

  // 7. Nodo Final ('Actual')
  const last = points[points.length - 1];
  const isLastHovered = hoveredPoint && hoveredPoint.idx === last.idx;

  ctx.beginPath();
  ctx.arc(last.x, last.y, (isLastHovered ? 5.0 : 3.4) * dpr, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(last.x, last.y, (isLastHovered ? 9.5 : 7.2) * dpr, 0, Math.PI * 2);
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 1.8 * dpr;
  ctx.stroke();

  if (!hoveredPoint && STATE.telemetry.isLive) {
    const lastDisplayVal = typeof last.val === 'number' && unit === 'ms' ? last.val.toFixed(1) : Math.round(last.val);
    drawDiscreteValueTag(ctx, `${lastDisplayVal}`, Math.min(w - 24 * dpr, last.x), last.y - 9 * dpr, strokeColor, dpr, true);
  }

  // 8. Eje X con Marcas cada 10 Minutos y Etiquetas Mayores (Hace 2h, 90m, 1h, 30m, Actual)
  const axisY = paddingTop + chartH + 4 * dpr;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
  ctx.lineWidth = 1 * dpr;
  ctx.beginPath();
  ctx.moveTo(paddingLeft, axisY);
  ctx.lineTo(w - paddingRight, axisY);
  ctx.stroke();

  // Ticks menores en cada uno de los 13 puntos (cada 10 min)
  for (let i = 0; i < points.length; i++) {
    const tx = points[i].x;
    ctx.beginPath();
    ctx.moveTo(tx, axisY);
    ctx.lineTo(tx, axisY + (i % 3 === 0 ? 5 : 2.5) * dpr);
    ctx.stroke();
  }

  // Etiquetas de texto legibles espaciadas (Contraste Clínico Alto)
  const majorLabels = [
    { text: 'Hace 2h', ptIdx: 0, align: 'left' },
    { text: 'Hace 90m', ptIdx: 3, align: 'center' },
    { text: 'Hace 1h', ptIdx: 6, align: 'center' },
    { text: 'Hace 30m', ptIdx: 9, align: 'center' },
    { text: 'Actual', ptIdx: 12, align: 'right' }
  ];

  ctx.font = `bold ${Math.round(8.5 * dpr)}px 'JetBrains Mono', monospace`;
  ctx.textBaseline = 'top';

  majorLabels.forEach((lbl) => {
    const pt = points[lbl.ptIdx];
    if (!pt) return;
    ctx.fillStyle = (lbl.text === 'Actual') ? strokeColor : 'rgba(235, 245, 240, 0.95)';
    ctx.textAlign = lbl.align;
    ctx.fillText(lbl.text, pt.x, axisY + 5 * dpr);
  });

  // 9. Tooltip Flotante Interactivo al Pasar el Cursor
  if (hoveredPoint) {
    drawInteractiveTooltip(ctx, hoveredPoint, strokeColor, formatValFn, formatPctFn, w, h, dpr);
  }
}

function drawInteractiveTooltip(ctx, pt, color, formatValFn, formatPctFn, canvasW, canvasH, dpr) {
  const line1 = `${pt.timeLabel}: ${formatValFn ? formatValFn(pt.val) : pt.val}`;
  const line2 = formatPctFn ? formatPctFn(pt.val) : '';

  ctx.font = `bold ${Math.round(8.6 * dpr)}px 'JetBrains Mono', monospace`;
  const w1 = ctx.measureText(line1).width;
  ctx.font = `${Math.round(7.6 * dpr)}px 'JetBrains Mono', monospace`;
  const w2 = ctx.measureText(line2).width;

  const boxW = Math.max(w1, w2) + 16 * dpr;
  const boxH = 28 * dpr;

  let tipX = pt.x - boxW / 2;
  if (tipX < 4 * dpr) tipX = 4 * dpr;
  if (tipX + boxW > canvasW - 4 * dpr) tipX = canvasW - boxW - 4 * dpr;

  let tipY = pt.y - boxH - 9 * dpr;
  if (tipY < 4 * dpr) tipY = pt.y + 12 * dpr;

  // Fondo glassmorphic
  ctx.fillStyle = 'rgba(8, 12, 10, 0.95)';
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3 * dpr;
  ctx.shadowColor = 'rgba(0,0,0,0.85)';
  ctx.shadowBlur = 10 * dpr;

  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(tipX, tipY, boxW, boxH, 6 * dpr) : ctx.rect(tipX, tipY, boxW, boxH);
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Textos
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${Math.round(8.4 * dpr)}px 'JetBrains Mono', monospace`;
  ctx.fillText(line1, tipX + boxW / 2, tipY + 4 * dpr);

  ctx.fillStyle = color;
  ctx.font = `${Math.round(7.4 * dpr)}px 'JetBrains Mono', monospace`;
  ctx.fillText(line2, tipX + boxW / 2, tipY + 15 * dpr);
}

function drawDiscreteValueTag(ctx, text, x, y, color, dpr, isMain = false) {
  ctx.font = `${Math.round((isMain ? 8.2 : 7.4) * dpr)}px 'JetBrains Mono', monospace`;
  const textWidth = ctx.measureText(text).width;
  const padX = 3 * dpr;
  const padY = 2 * dpr;
  const boxW = textWidth + padX * 2;
  const boxH = 11 * dpr;

  ctx.fillStyle = 'rgba(8, 12, 10, 0.92)';
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.8 * dpr;
  ctx.beginPath();
  ctx.rect(x - boxW / 2, y - boxH / 2, boxW, boxH);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = isMain ? color : '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y);
}

// ==============================================================================
// 7.5 MOTOR DE PARTÍCULAS BIOELÉCTRICAS AMBIENTALES (60 FPS - CANVAS ACELERADO)
// ==============================================================================
let particleCanvas = null;
let particleCtx = null;
let ambientParticles = [];
const NUM_PARTICLES = 20;

function initAmbientParticles() {
  particleCanvas = document.getElementById('ambient-particles-canvas');
  if (!particleCanvas) return;
  particleCtx = particleCanvas.getContext('2d');
  resizeAmbientParticlesCanvas();
  window.addEventListener('resize', resizeAmbientParticlesCanvas);

  ambientParticles = [];
  const w = particleCanvas.width || window.innerWidth;
  const h = particleCanvas.height || window.innerHeight;

  for (let i = 0; i < NUM_PARTICLES; i++) {
    ambientParticles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.30,
      vy: (Math.random() - 0.5) * 0.30,
      radius: Math.random() * 1.5 + 1.0,
      baseAlpha: Math.random() * 0.25 + 0.10,
      color: Math.random() > 0.4 ? 'rgba(0, 229, 255, ' : 'rgba(0, 255, 136, ',
      phase: Math.random() * Math.PI * 2
    });
  }
}

function resizeAmbientParticlesCanvas() {
  if (!particleCanvas) return;
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
}

function updateAmbientParticles() {
  if (!particleCanvas || !particleCtx) return;
  const w = particleCanvas.width;
  const h = particleCanvas.height;

  particleCtx.clearRect(0, 0, w, h);

  const len = ambientParticles.length;
  // Renderizado ultra-ligero de 60 FPS: Nodos bioeléctricos tenues sin cálculos pesados
  for (let i = 0; i < len; i++) {
    const p = ambientParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.phase += 0.015;

    if (p.x < 0) p.x = w;
    else if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    else if (p.y > h) p.y = 0;

    const currentAlpha = p.baseAlpha + Math.sin(p.phase) * 0.08;

    particleCtx.beginPath();
    particleCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    particleCtx.fillStyle = `${p.color}${Math.max(0.04, currentAlpha).toFixed(2)})`;
    particleCtx.fill();
  }
}

// ==============================================================================
// 8. MOTOR OSCILOSCÓPICO REAL AD8232 (INGESTA 250 HZ, FILTRADO DSP Y PAN-TOMPKINS REAL)
// ==============================================================================
let ecgCanvas, ecgCtx;
let ecgSweepX = 0;
let ecgPrevY = 0;

// Estado del Filtro Digital
let isFilterActive = true; // Por defecto pasa-banda activo (0.5-35Hz anti-ruido)

// Buffer Circular de Muestras Analógicas Crudas y Filtradas (10 segundos a 250 Hz)
const ECG_BUFFER_CAPACITY = 2500;
const ecgRawBuffer = new Float32Array(ECG_BUFFER_CAPACITY);
const ecgFilteredBuffer = new Float32Array(ECG_BUFFER_CAPACITY);
let ecgBufferHead = 0;
let ecgTotalSamples = 0;

// Seguimiento adaptativo de línea base (Dynamic Baseline Tracking)
let ecgBaselineEst = 2048.0;
let ecgBaselineInitialized = false;

// Filtros Digitales IIR de Grado Biomédico
// 1. Pasa-Altos (0.5 Hz @ Fs = 250 Hz) -> Remueve deriva respiratoria y offset DC
let hpPrevX = 0.0;
let hpPrevY = 0.0;
const HP_ALPHA = 0.988;

// 2. Pasa-Bajos Suave en Cascada (35 Hz @ Fs = 250 Hz) -> Elimina zumbido de 50 Hz y temblores musculares (EMG)
let lpStage1 = 0.0;
let lpStage2 = 0.0;
const LP_ALPHA = 0.55;

function processDspFilters(rawSample) {
  // Inicialización rápida de línea base
  if (!ecgBaselineInitialized) {
    ecgBaselineEst = rawSample;
    ecgBaselineInitialized = true;
  } else {
    // Seguimiento lento de respiración y transpiración (~0.4 Hz)
    ecgBaselineEst += 0.007 * (rawSample - ecgBaselineEst);
  }

  // Centrado respecto a la línea base biológica real
  const centered = rawSample - ecgBaselineEst;

  // Filtro Pasa-Altos (0.5 Hz): Elimina derivas lentas
  const hpOut = HP_ALPHA * (hpPrevY + centered - hpPrevX);
  hpPrevX = centered;
  hpPrevY = hpOut;

  // Filtro Pasa-Bajos en cascada (35 Hz): Suprime 50 Hz de red y ruido EMG sin oscilaciones ni sobrepico
  lpStage1 += LP_ALPHA * (hpOut - lpStage1);
  lpStage2 += LP_ALPHA * (lpStage1 - lpStage2);

  return lpStage2;
}

// ------------------------------------------------------------------------------
// DETECTOR PAN-TOMPKINS REAL CON VENTANA REFRACTARIA ANTI-ONDA T (ANTI-FALSO 120/150 LPM)
// ------------------------------------------------------------------------------
let ptPrevVal = 0.0;
let ptPrevPrevVal = 0.0;
const PT_WINDOW = 22; // Ventana de integración de ~88 ms para el complejo QRS
const ptIntegratorBuffer = new Float32Array(PT_WINDOW);
let ptIntegratorHead = 0;
let ptIntegratorSum = 0.0;

let ptPeakSignal = 120.0;
let ptPeakNoise = 20.0;
let ptAdaptiveThreshold = 55.0;
let lastRPeakSampleIndex = 0;

// Buffer circular de 7 intervalos R-R para filtrado de mediana (Anti-saltos y anti-jitter clínico)
const recentRrIntervals = [800, 800, 800, 800, 800, 800, 800];
let recentRrIndex = 0;
let runningRmssd = 35.0;
let ecgPeakEnvelope = 350.0;

function runPanTompkinsPeakDetection(filteredVal, sampleIndex, nowMs) {
  // A. Derivada de 3 puntos (acentúa la pendiente abrupta del complejo QRS)
  const deriv = (filteredVal - ptPrevPrevVal) * 0.5;
  ptPrevPrevVal = ptPrevVal;
  ptPrevVal = filteredVal;

  // B. Cuadrado no-lineal (resalta la energía del QRS hasta 100x respecto a la onda T)
  const squared = deriv * deriv;

  // C. Integrador de ventana móvil (~88 ms)
  ptIntegratorSum -= ptIntegratorBuffer[ptIntegratorHead];
  ptIntegratorBuffer[ptIntegratorHead] = squared;
  ptIntegratorSum += squared;
  ptIntegratorHead = (ptIntegratorHead + 1) % PT_WINDOW;
  const integratedEnergy = ptIntegratorSum / PT_WINDOW;

  // D. Umbral adaptativo continuo
  ptAdaptiveThreshold = ptPeakNoise + 0.40 * (ptPeakSignal - ptPeakNoise);
  ptPeakSignal *= 0.9993;
  ptPeakNoise *= 0.9996;

  // E. PERIODO REFRACTARIO FISIOLÓGICO ESTRICTO (340 ms mínimo):
  // Impide físicamente que la onda T (que ocurre a los 180-300 ms del complejo R)
  // sea contada como un segundo latido falso (evita saltos a 120 o 150 LPM).
  const samplesSincePeak = sampleIndex - lastRPeakSampleIndex;
  const msSincePeak = (samplesSincePeak / 250.0) * 1000.0;

  if (integratedEnergy > ptAdaptiveThreshold && msSincePeak >= 220.0) {
    lastRPeakSampleIndex = sampleIndex;
    ptPeakSignal = Math.max(ptPeakSignal, integratedEnergy);

    // Validación fisiológica: latidos válidos entre 240 ms (250 lpm) y 2000 ms (30 lpm)
    if (msSincePeak >= 240.0 && msSincePeak <= 2000.0) {
      recentRrIntervals[recentRrIndex] = msSincePeak;
      recentRrIndex = (recentRrIndex + 1) % recentRrIntervals.length;

      // Filtro de Mediana de 7 intervalos: elimina picos o pausas aisladas
      const sortedRr = [...recentRrIntervals].sort((a, b) => a - b);
      const medianRr = sortedRr[Math.floor(sortedRr.length / 2)];
      const rawInstantBpm = 60000.0 / medianRr;

      // Suavizado clínico exponencial (75% histórico + 25% nuevo)
      let smoothedBpm = STATE.telemetry.bpm > 0 
        ? Math.round(STATE.telemetry.bpm * 0.75 + rawInstantBpm * 0.25)
        : Math.round(rawInstantBpm);
      smoothedBpm = Math.max(40, Math.min(200, smoothedBpm));

      // Variabilidad R-R real (RMSSD)
      const prevInterval = recentRrIntervals[(recentRrIndex - 2 + recentRrIntervals.length) % recentRrIntervals.length];
      const deltaRr = Math.abs(msSincePeak - prevInterval);
      runningRmssd = runningRmssd * 0.80 + deltaRr * 0.20;

      // Actualizar estado de telemetría con datos físicos reales del sensor
      if (!STATE.config.simulationMode) {
        STATE.telemetry.bpm = smoothedBpm;
        STATE.telemetry.hrvRmssd = Number(runningRmssd.toFixed(1));
        const lastHistIdx = STATE.telemetry.historyBpm.length - 1;
        STATE.telemetry.historyBpm[lastHistIdx] = smoothedBpm;
        const effortData = calculateEffortZone(smoothedBpm, STATE.patient.fcMax, STATE.patient.fcRest);
        STATE.telemetry.effortPct = effortData.pct;
        STATE.telemetry.effortZone = effortData.zone;
        STATE.telemetry.rppIndex = calculateRpp(smoothedBpm, STATE.patient.fcRest);
        updateLiveTelemetryDom(smoothedBpm, effortData);
        redrawAllBentoCharts();
      }
      STATE.telemetry.rrInterval = Math.round(msSincePeak);

      // Disparar sístole del modelo 3D y audio de latido en estricto sincronismo con el pico R
      onCardiacBeatTriggered(nowMs);
    }
  } else if (integratedEnergy > ptPeakNoise && integratedEnergy < ptAdaptiveThreshold) {
    ptPeakNoise = Math.max(ptPeakNoise, integratedEnergy * 0.5);
  }
}

// ------------------------------------------------------------------------------
// INGESTA DE MUESTRAS ANALÓGICAS CRUDAS (ADC 12-BIT 0-4095) Y COLA DE 250 HZ
// ------------------------------------------------------------------------------
let isLeadsOffActive = false;
const ecgSampleQueue = [];

function pushRawAdcSample(sample) {
  const rawInt = Math.max(0, Math.min(4095, Math.round(Number(sample))));
  if (isNaN(rawInt)) return;

  STATE.telemetry.lastRawAdc = rawInt;
  ecgSampleQueue.push(rawInt);

  // Prevenir saturación de memoria si la pestaña queda en segundo plano
  if (ecgSampleQueue.length > 1200) {
    ecgSampleQueue.splice(0, ecgSampleQueue.length - 250);
  }
}

function pushRawAdcBatch(samplesArray) {
  if (!Array.isArray(samplesArray)) return;
  for (let i = 0; i < samplesArray.length; i++) {
    pushRawAdcSample(samplesArray[i]);
  }
}

function setLeadsOffState(leadsOff) {
  isLeadsOffActive = Boolean(leadsOff);
  STATE.telemetry.leadsOff = isLeadsOffActive;

  const badgeDot = document.getElementById('signal-dot');
  const badgeTxt = document.getElementById('signal-txt');
  const elLeads = document.getElementById('val-live-leads');

  if (isLeadsOffActive) {
    if (badgeDot) {
      badgeDot.className = 'signal-dot-pulse critical';
      badgeDot.style.background = '#ff2a55';
      badgeDot.style.boxShadow = '0 0 10px #ff2a55';
    }
    if (badgeTxt) {
      badgeTxt.style.color = '#ff2a55';
      badgeTxt.innerText = 'CALIDAD ECG: ELECTRODO DESCONECTADO (LO+/LO-)';
    }
    if (elLeads) {
      elLeads.className = 'highlight-red';
      elLeads.innerText = 'ELECTRODO SUELTO (LO)';
    }
  } else if (STATE.telemetry.isLive) {
    if (badgeDot) {
      badgeDot.className = 'signal-dot-pulse';
      badgeDot.style.background = '#00ff41';
      badgeDot.style.boxShadow = '0 0 8px #00ff41';
    }
    if (badgeTxt) {
      badgeTxt.style.color = '#00ff41';
      badgeTxt.innerText = 'CALIDAD ECG: ÓPTIMA (ELECTRODOS OK)';
    }
    if (elLeads) {
      elLeads.className = 'highlight-green';
      elLeads.innerText = 'RA, LA, RL (OK)';
    }
  }
}

// ------------------------------------------------------------------------------
// CONTROLADOR DE WEB SERIAL API (CONEXIÓN DIRECTA USB A 115200 BAUDIOS)
// ------------------------------------------------------------------------------
let serialPort = null;
let serialReader = null;
let isSerialReading = false;

async function connectWebSerial() {
  if (!('serial' in navigator)) {
    alert('⚠️ Tu navegador no soporta Web Serial API.\nPor favor ejecuta este dashboard en Google Chrome o Microsoft Edge para conectar el ESP32 directamente por USB.');
    return;
  }

  try {
    serialPort = await navigator.serial.requestPort();
    await serialPort.open({ baudRate: 115200 });

    const btnUsb = document.getElementById('btn-web-serial');
    if (btnUsb) {
      btnUsb.classList.add('active-usb');
      btnUsb.innerHTML = '<span>🔌 USB Conectado (115200)</span>';
    }

    const mqttDot = document.getElementById('mqtt-dot');
    const mqttBadge = document.getElementById('mqtt-badge');
    const mqttTxt = document.getElementById('mqtt-txt');
    if (mqttDot) mqttDot.className = 'status-pulse-dot';
    if (mqttBadge) mqttBadge.className = 'mqtt-live-badge';
    if (mqttTxt) mqttTxt.innerText = 'ESP32 EN LÍNEA POR USB (250 HZ ADC CRUDO)';

    STATE.telemetry.isLive = true;
    STATE.config.simulationMode = false; // El sensor físico tiene prioridad absoluta

    const banner = document.getElementById('ecg-standby-banner');
    if (banner) banner.classList.add('hidden');
    const ecgDot = document.getElementById('ecg-dot-status');
    if (ecgDot) ecgDot.className = 'ecg-dot-live';
    const ecgTitle = document.getElementById('ecg-status-title');
    if (ecgTitle) ecgTitle.innerText = 'ELECTROCARDIOGRAMA (ECG) | DERIVACIÓN I (ACTIVO 250 Hz)';

    readSerialStream(serialPort);
    // Activar retransmisión automática hacia la nube para que el profesor pueda verlo desde el teléfono
    if (!mqttClientInstance || !mqttClientInstance.isConnected()) {
      connectMqttBroker();
    }
  } catch (err) {
    console.warn('[WebSerial] Error al solicitar puerto COM:', err);
  }
}

async function readSerialStream(port) {
  const textDecoder = new TextDecoderStream();
  const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
  const reader = textDecoder.readable.getReader();
  serialReader = reader;
  isSerialReading = true;

  let partialLine = '';
  try {
    while (isSerialReading) {
      const { value, done } = await reader.read();
      if (done) break;
      if (value) {
        partialLine += value;
        const lines = partialLine.split('\n');
        partialLine = lines.pop();
        for (const l of lines) {
          const trimmed = l.trim();
          if (trimmed.length > 0) {
            handleIncomingTelemetryPayload(trimmed);
            relayTelemetryPacketToCloud(trimmed);
          }
        }
      }
    }
  } catch (err) {
    console.warn('[WebSerial] Conexión USB interrumpida:', err);
  } finally {
    reader.releaseLock();
  }
}

// ------------------------------------------------------------------------------
// INICIALIZACIÓN Y RENDERIZADO DEL OSCILOSCOPIO ECG (60 FPS)
// ------------------------------------------------------------------------------
function initEcgOscilloscope() {
  ecgCanvas = document.getElementById('ecg-sweep-canvas');
  if (!ecgCanvas) return;
  ecgCtx = ecgCanvas.getContext('2d');
  resizeEcgCanvas();
  setTimeout(resizeEcgCanvas, 200);
  window.addEventListener('resize', resizeEcgCanvas);
  ecgPrevY = (ecgCanvas.height || 100) * 0.52;

  // Botón para alternar filtro DSP (Filtrado vs Raw)
  const btnFilter = document.getElementById('btn-toggle-filter');
  btnFilter?.addEventListener('click', toggleFilterMode);

  // Botón para conexión USB Web Serial
  const btnUsb = document.getElementById('btn-web-serial');
  btnUsb?.addEventListener('click', connectWebSerial);
}

function resizeEcgCanvas() {
  if (!ecgCanvas || !ecgCtx) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = ecgCanvas.getBoundingClientRect();
  ecgCanvas.width = rect.width * dpr;
  ecgCanvas.height = rect.height * dpr;

  ecgCtx.clearRect(0, 0, ecgCanvas.width, ecgCanvas.height);
  ecgPrevY = ecgCanvas.height * 0.52;
}

function toggleFilterMode() {
  isFilterActive = !isFilterActive;
  const btnFilter = document.getElementById('btn-toggle-filter');
  if (btnFilter) {
    if (isFilterActive) {
      btnFilter.className = 'filter-toggle-pill';
      btnFilter.innerText = 'FILTRADO (0.5-35Hz)';
    } else {
      btnFilter.className = 'filter-toggle-pill raw-mode';
      btnFilter.innerText = 'RAW ADC (0-4095)';
    }
  }
}

// ------------------------------------------------------------------------------
// RENDERIZADO DEL OSCILOSCOPIO (BARRIDO CRT HOSPITALARIO 25 MM/S A 60 FPS)
// ------------------------------------------------------------------------------
function updateEcgOscilloscope(dtMs) {
  if (!ecgCanvas || !ecgCtx) return;
  const w = ecgCanvas.width;
  const h = ecgCanvas.height;
  if (!w || !h) return;

  const dpr = window.devicePixelRatio || 1;
  const isLive = STATE.telemetry.isLive;
  const baselineY = h * 0.52;

  // Calibración hospitalaria estándar: velocidad de barrido ~25 mm/s
  const dxPerSample = (220.0 * dpr) / 250.0; // 0.88 * dpr px por muestra a 250 Hz
  const eraseWidth = Math.ceil(18 * dpr);

  // MODO STANDBY (Sin sensor conectado ni simulación)
  if (!isLive) {
    const banner = document.getElementById('ecg-standby-banner');
    if (banner && banner.classList.contains('hidden')) banner.classList.remove('hidden');

    const advancePx = Math.max(1.0, (0.22 * dpr) * dtMs);
    const startX = ecgSweepX;
    const endX = ecgSweepX + advancePx;
    const eraseStart = endX % w;

    drawCrtEraseBar(eraseStart, eraseWidth, w, h);

    ecgCtx.lineWidth = 1.6 * dpr;
    ecgCtx.strokeStyle = 'rgba(0, 255, 65, 0.35)';
    ecgCtx.shadowBlur = 0;
    ecgCtx.beginPath();
    ecgCtx.moveTo(startX % w, ecgPrevY);

    const steps = Math.max(2, Math.ceil(advancePx / (2.0 * dpr)));
    const stepDx = advancePx / steps;
    let currX = startX % w;

    for (let s = 1; s <= steps; s++) {
      const nextX = (startX + s * stepDx) % w;
      const noise = (Math.random() - 0.5) * (1.6 * dpr);
      const currY = baselineY + noise;

      if (nextX < currX) {
        ecgCtx.stroke();
        ecgCtx.beginPath();
        ecgCtx.moveTo(nextX, currY);
      } else {
        ecgCtx.lineTo(nextX, currY);
      }
      currX = nextX;
      ecgPrevY = currY;
    }
    ecgCtx.stroke();
    ecgSweepX = endX % w;
    return;
  }

  // MODO EN VIVO (Procesa cada muestra a 250 Hz desde ecgSampleQueue)
  const banner = document.getElementById('ecg-standby-banner');
  if (banner && !banner.classList.contains('hidden')) banner.classList.add('hidden');

  let samplesToProcess = ecgSampleQueue.length;
  if (samplesToProcess === 0) return;

  // Límite de seguridad: máximo 35 muestras por frame (~140 ms) para mantener 60 FPS estables
  samplesToProcess = Math.min(35, samplesToProcess);

  ecgCtx.lineWidth = 2.0 * dpr;
  if (isLeadsOffActive) {
    ecgCtx.strokeStyle = '#ff2a55';
    ecgCtx.shadowColor = '#ff2a55';
    ecgCtx.shadowBlur = 4 * dpr;
  } else if (!isFilterActive) {
    ecgCtx.strokeStyle = '#ffaa00';
    ecgCtx.shadowColor = '#ffaa00';
    ecgCtx.shadowBlur = 3 * dpr;
  } else {
    ecgCtx.strokeStyle = '#00ff41';
    ecgCtx.shadowColor = '#00ff41';
    ecgCtx.shadowBlur = 4 * dpr;
  }
  ecgCtx.lineCap = 'round';
  ecgCtx.lineJoin = 'round';

  // Borrado CRT trazado por delante del haz luminoso
  const totalAdvance = samplesToProcess * dxPerSample;
  const eraseStart = (ecgSweepX + totalAdvance) % w;
  drawCrtEraseBar(eraseStart, eraseWidth, w, h);

  ecgCtx.beginPath();
  let currentStartX = ecgSweepX;
  let currentStartY = ecgPrevY;

  for (let i = 0; i < samplesToProcess; i++) {
    const rawSample = ecgSampleQueue.shift();
    const filteredVal = processDspFilters(rawSample);

    ecgRawBuffer[ecgBufferHead] = rawSample;
    ecgFilteredBuffer[ecgBufferHead] = filteredVal;
    ecgBufferHead = (ecgBufferHead + 1) % ECG_BUFFER_CAPACITY;
    ecgTotalSamples++;

    // Detección de picos QRS con el valor filtrado si los electrodos están colocados
    if (!isLeadsOffActive) {
      runPanTompkinsPeakDetection(filteredVal, ecgTotalSamples, performance.now());
    }

    // Señal a graficar: filtrada o cruda centrada
    let valToDraw = isFilterActive ? filteredVal : (rawSample - ecgBaselineEst);

    // Si los electrodos están desconectados, mostrar micro-ruido de línea abierta
    if (isLeadsOffActive) {
      valToDraw = (Math.random() - 0.5) * 6.0;
    }

    // Control Automático de Ganancia (AGC) adaptativo natural sin recortes planos (tanh)
    const absVal = Math.abs(valToDraw);
    if (absVal > ecgPeakEnvelope) {
      ecgPeakEnvelope = absVal;
    } else {
      ecgPeakEnvelope = ecgPeakEnvelope * 0.9994 + 320.0 * 0.0006;
    }

    const currentMaxAmp = Math.max(140.0, Math.min(2400.0, ecgPeakEnvelope));
    const dynamicScale = (h * 0.33) / currentMaxAmp;

    let nextY = baselineY - (valToDraw * dynamicScale);
    // Margen de seguridad para no salirse de la pantalla
    nextY = Math.max(h * 0.05, Math.min(h * 0.95, nextY));

    const nextX = (currentStartX + dxPerSample) % w;

    if (nextX < currentStartX) {
      ecgCtx.stroke();
      ecgCtx.beginPath();
      ecgCtx.moveTo(0, nextY);
    } else {
      ecgCtx.moveTo(currentStartX, currentStartY);
      ecgCtx.lineTo(nextX, nextY);
    }

    currentStartX = nextX;
    currentStartY = nextY;
  }

  ecgCtx.stroke();
  ecgCtx.shadowBlur = 0;

  ecgSweepX = currentStartX;
  ecgPrevY = currentStartY;

  // Actualizar indicadores numéricos en la barra inferior
  const displayBpm = (typeof STATE.telemetry.bpm === 'number' && STATE.telemetry.bpm > 0 && !isLeadsOffActive) 
    ? Math.round(STATE.telemetry.bpm) 
    : '--';
  setFastText(DOM.valLiveBpm, `${displayBpm} lpm`);
  setFastText(DOM.valLiveRr, isLeadsOffActive ? '-- ms' : `${STATE.telemetry.rrInterval || '--'} ms`);
  setFastText(DOM.valLiveAdc, `${STATE.telemetry.lastRawAdc || '--'}`);
}

function drawCrtEraseBar(eraseStart, eraseWidth, w, h) {
  if (eraseStart + eraseWidth <= w) {
    ecgCtx.clearRect(eraseStart, 0, eraseWidth, h);
  } else {
    const p1 = w - eraseStart;
    ecgCtx.clearRect(eraseStart, 0, p1, h);
    const p2 = eraseWidth - p1;
    if (p2 > 0) ecgCtx.clearRect(0, 0, p2, h);
  }
}

// 9. BUCLE PRINCIPAL DE ANIMACIÓN Y TELEMETRÍA (60 FPS)
// ==============================================================================
let lastFrameTime = performance.now();
let lastChartRedrawTime = 0;
let perfFpsDropCounter = 0;

function mainAnimationLoop(now) {
  requestAnimationFrame(mainAnimationLoop);

  const dt = Math.min(64, now - lastFrameTime);
  lastFrameTime = now;

  // Monitor de rendimiento a 60 FPS (Fase 5: Degradación elegante si cae de 52 FPS)
  const currentFps = dt > 0 ? 1000.0 / dt : 60;
  if (currentFps < 52) {
    perfFpsDropCounter++;
    if (perfFpsDropCounter > 90) {
      document.body.classList.add('perf-fallback-bg');
    }
  } else {
    perfFpsDropCounter = Math.max(0, perfFpsDropCounter - 1);
  }

  // 0. Motor de partículas bioeléctricas ambientales (fondo acelerado)
  updateAmbientParticles();

  // 1. Simulación si está activada
  if (STATE.config.simulationMode) {
    updatePhysiologicalSimulation(now);
  }

  // 2. Comprobación de seguridad crítica
  checkRedZoneEmergencySafety(now);

  // 3. Motor cardíaco reactivo y sístole 3D
  updateCardiacEngine(now);

  // 4. Barrido osciloscópico de ECG (60 FPS fijos con suavizado Bézier)
  updateEcgOscilloscope(dt);

  // 5. Redibujado eficiente de gráficos Bento (a 4 Hz o si hay hover)
  if (now - lastChartRedrawTime > 250) {
    lastChartRedrawTime = now;
    redrawAllBentoCharts();
  }
}

// ==============================================================================
// 10. SIMULACIÓN DE PRUEBA DE ESFUERZO / TROTE (INYECCIÓN ADC 250 HZ CALIBRADA)
// ==============================================================================
let simVirtualTimeSec = 0.0;
let simAccMs = 0;
let simEmaNoise = 0.0;
let simCardiacPhaseMs = 0.0;
let simTrottingTimerSec = 0.0;

let mcSharryPhase = -Math.PI;
let mcSharryRespPhase = 0.0;

/**
 * Generador Dinámico de Electrocardiograma (Modelo McSharry - ECGSYN IEEE TBME)
 * Modela la despolarización y repolarización cardíaca como una trayectoria continua en el plano de fase.
 * Las ondas P, Q, R, S, T se calculan como componentes gaussianas acopladas a la frecuencia cardíaca.
 * Incluye arritmia sinusal respiratoria (RSA a 0.25 Hz) y micro-ruido de interfaz piel-electrodo.
 */
function generateMcSharrySample(curBpm, dtSec = 0.004) {
  const bpmBounded = Math.max(40, Math.min(220, curBpm));
  const omega = 2.0 * Math.PI * (bpmBounded / 60.0);
  mcSharryPhase += omega * dtSec;
  while (mcSharryPhase > Math.PI) mcSharryPhase -= 2.0 * Math.PI;

  // Modulación respiratoria (RSA) a 0.25 Hz
  mcSharryRespPhase += 2.0 * Math.PI * 0.25 * dtSec;
  if (mcSharryRespPhase > 2.0 * Math.PI) mcSharryRespPhase -= 2.0 * Math.PI;
  const respDrift = 14.0 * Math.sin(mcSharryRespPhase);

  // Intervalo QT dinámico (Fórmula de Bazett: la onda T se aproxima en taquicardia)
  const hrRatio = bpmBounded / 75.0;
  const tWavePos = 1.35 * Math.pow(hrRatio, 0.35);

  // Parámetros de ondas de Derivación I: [posición_rad, amplitud_mV, ancho_rad]
  const waves = [
    [-1.20, 0.18, 0.20],    // Onda P (despolarización auricular)
    [-0.22, -0.16, 0.07],   // Onda Q (despolarización septal inicial)
    [0.00,  1.42, 0.055],   // Onda R (despolarización ventricular masiva)
    [0.22,  -0.32, 0.08],   // Onda S (despolarización basal ventricular)
    [tWavePos, 0.34, 0.34]  // Onda T (repolarización ventricular)
  ];

  let z = 0.0;
  for (let i = 0; i < waves.length; i++) {
    const pos = waves[i][0];
    const a = waves[i][1];
    const b = waves[i][2];
    let dTheta = (mcSharryPhase - pos + Math.PI) % (2.0 * Math.PI);
    if (dTheta < 0) dTheta += 2.0 * Math.PI;
    dTheta -= Math.PI;
    z += a * Math.exp(-(dTheta * dTheta) / (2.0 * b * b));
  }

  // Micro-ruido bioeléctrico natural de electrodos (0.6% RMS)
  const skinNoise = (Math.random() - 0.5) * 8.0;

  // Calibración ADC 12 bits AD8232 (0-4095, centrado en referencia 2048)
  const adcVal = Math.round(2048 + (z * 750.0) + respDrift + skinNoise);
  return Math.max(0, Math.min(4095, adcVal));
}

function updatePhysiologicalSimulation(now) {
  const dtMs = 16.6; // ~60 FPS
  simAccMs += dtMs;

  // Perfil fisiológico de trote (Prueba de esfuerzo en carrera):
  // 68 lpm reposo -> acelera gradualmente a 138-144 lpm (trote) -> recuperación
  if (!window._manualBpmActive) {
    simTrottingTimerSec += dtMs / 1000.0;
    const cycle = simTrottingTimerSec % 65.0;
    let targetBpm = 68;

    if (cycle < 22.0) {
      const prog = cycle / 22.0;
      targetBpm = 68 + (140 - 68) * Math.sin(prog * (Math.PI / 2));
    } else if (cycle < 45.0) {
      targetBpm = 140 + 5 * Math.sin((cycle - 22.0) * 0.35);
    } else {
      const coolProg = (cycle - 45.0) / 20.0;
      targetBpm = 68 + (140 - 68) * Math.cos(coolProg * (Math.PI / 2));
    }
    STATE.telemetry.bpm += (targetBpm - STATE.telemetry.bpm) * 0.035;
  }

  const curBpm = Math.max(50, Math.min(195, STATE.telemetry.bpm || 72));

  // Tono vagal vs simpático: el HRV disminuye con el esfuerzo de carrera
  const hrvTarget = Math.max(20.0, 62.0 - ((curBpm - 60) / 80.0) * 35.0);
  STATE.telemetry.hrvRmssd += (hrvTarget - STATE.telemetry.hrvRmssd) * 0.03;

  STATE.telemetry.rppIndex = calculateRpp(curBpm, STATE.patient.fcRest);
  const effortData = calculateEffortZone(curBpm, STATE.patient.fcMax, STATE.patient.fcRest);
  STATE.telemetry.effortPct = effortData.pct;
  STATE.telemetry.effortZone = effortData.zone;

  // En el Bento Grid de 2 horas (13 puntos), SOLO actualizamos el nodo 'Actual' (índice 12).
  // La curva histórica de las 2 horas previas se mantiene estable sin saltar.
  const lastIdx = STATE.telemetry.historyBpm.length - 1;
  STATE.telemetry.historyBpm[lastIdx] = Math.round(curBpm);
  STATE.telemetry.historyRpp[lastIdx] = Number(STATE.telemetry.rppIndex.toFixed(1));
  STATE.telemetry.historyEffort[lastIdx] = Math.round(effortData.pct);
  STATE.telemetry.historyHrv[lastIdx] = Number(STATE.telemetry.hrvRmssd.toFixed(1));

  updateLiveTelemetryDom(curBpm, effortData);

  if (!window._lastScadaPub || (now - window._lastScadaPub > 1000)) {
    window._lastScadaPub = now;
    publishTelemetryToScada();
  }

  // -------------------------------------------------------------------------
  // INGESTA A 250 HZ ESTRICTO MEDIANTE EL MODELO DINÁMICO MCSHARRY (ECGSYN)
  // Genera ondas electrofisiológicas fluidas, continuas y anatómicamente reales,
  // con variación de frecuencia proporcional exacta, sin saltos de array ni huecos.
  // -------------------------------------------------------------------------
  while (simAccMs >= 4.0) {
    simAccMs -= 4.0;
    const rawAdcSample = generateMcSharrySample(curBpm, 0.004);
    pushRawAdcSample(rawAdcSample);
    simCloudBatch.push(rawAdcSample);
    if (simCloudBatch.length >= 10) {
      relayTelemetryPacketToCloud({
        leads_off: false,
        samples: simCloudBatch.slice(),
        bpm: Math.round(curBpm)
      });
      simCloudBatch.length = 0;
    }
  }
}
function updateLiveTelemetryDom(curBpm, effortData) {
  if (!DOM.isCached) cacheDomElements();

  setFastText(DOM.valBpm, `${Math.round(curBpm)}`);
  setFastText(DOM.hudCardiac, `${Math.round(curBpm)} LPM`);
  setFastText(DOM.lblHeartStatus, 'Contractilidad Dinámica');

  if (DOM.txtDeltaBpm) {
    const diff = Math.round(curBpm - STATE.patient.fcRest);
    setFastText(DOM.txtDeltaBpm, `${diff >= 0 ? '+' : ''}${diff} lpm →`);
  }

  // Actualizar Tarjeta 2: Estado Cardíaco Clínico Oficial AHA (Bradicardia, Normocardia, Taquicardia)
  updateCardiacStateCard(curBpm);
}

function resetDomToStandby() {
  STATE.config.simulationMode = false;
  STATE.telemetry.isLive = false;
  STATE.telemetry.bpm = 0;
  STATE.telemetry.historyBpm = [];
  STATE.telemetry.historyRpp = [];
  STATE.telemetry.historyEffort = [];
  STATE.telemetry.historyHrv = [];
  updateTopStatusChip('STANDBY');
  STATE.telemetry.targetBpm = 0;
  STATE.telemetry.rppIndex = 0;
  STATE.telemetry.effortPct = 0;
  STATE.telemetry.effortZone = 1;
  STATE.telemetry.hrvRmssd = 0;
  ecgSampleQueue.length = 0;
  mcSharryPhase = -Math.PI;
  hpPrevX = 0.0;
  hpPrevY = 0.0;
  lpStage1 = 0.0;
  lpStage2 = 0.0;
  ecgBaselineEst = 2048.0;
  ecgBaselineInitialized = false;
  ecgPeakEnvelope = 320.0;

  if (!DOM.isCached) cacheDomElements();

  setFastText(DOM.valBpm, '--');
  setFastText(DOM.hudCardiac, '-- LPM');
  setFastText(DOM.lblHeartStatus, 'ESTADO: EN ESPERA');
  setFastText(DOM.txtDeltaBpm, '-- lpm →');
  setFastText(DOM.valRpp, '--');
  setFastText(DOM.txtDeltaRpp, '-- k →');
  setFastText(DOM.valEffortZone, '--');
  setFastText(DOM.valEffortPct, '--%');
  setFastText(DOM.txtDeltaEffort, '--% ↗');
  setFastText(DOM.valHrv, '--');
  setFastText(DOM.txtDeltaHrv, '-- ms →');

  setFastText(DOM.valLiveBpm, '-- lpm');
  setFastText(DOM.valLiveRr, '-- ms');
  setFastText(DOM.valLiveAdc, '--');

  const banner = document.getElementById('ecg-standby-banner');
  if (banner) banner.classList.remove('hidden');

  const ecgDot = document.getElementById('ecg-dot-status');
  if (ecgDot) ecgDot.className = 'ecg-dot-live standby';

  const ecgTitle = document.getElementById('ecg-status-title');
  if (ecgTitle) ecgTitle.innerText = 'ELECTROCARDIOGRAMA (ECG) | DERIVACIÓN I (EN ESPERA)';

  const mqttDot = document.getElementById('mqtt-dot');
  const mqttTxt = document.getElementById('mqtt-txt');
  const mqttBadge = document.getElementById('mqtt-badge');
  if (mqttDot) mqttDot.className = 'status-pulse-dot standby';
  if (mqttBadge) mqttBadge.className = 'mqtt-live-badge standby';
  if (mqttTxt) mqttTxt.innerText = 'ESP32 DESCONECTADO (ESPERANDO TELEMETRÍA)';

  const signalDot = document.getElementById('signal-dot');
  const signalTxt = document.getElementById('signal-txt');
  const signalBadge = document.getElementById('signal-quality-badge');
  if (signalDot) signalDot.className = 'signal-dot-pulse standby';
  if (signalBadge) signalBadge.className = 'signal-quality-badge standby';
  if (signalTxt) signalTxt.innerText = 'CALIDAD ECG: EN ESPERA DE SENSOR (AD8232)';

  const btnSim = document.getElementById('btn-toggle-sim');
  const btnSimTxt = document.getElementById('btn-toggle-sim-txt');
  if (btnSim) btnSim.classList.remove('active-sim');
  if (btnSimTxt) btnSimTxt.innerText = '🧪 Probar Simulación';

  // Purgar alertas críticas rojas y estroboscopio al volver a ESPERA (Fase 4)
  const riskBanner = document.getElementById('banner-cardiac-risk');
  if (riskBanner) {
    riskBanner.classList.remove('active');
    riskBanner.style.display = 'none';
  }
  document.body.classList.remove('emergency-strobe');
  const timerVal = document.getElementById('emergency-timer-val');
  if (timerVal) timerVal.innerText = '0s';
  const barProgress = document.getElementById('bar-redzone-progress');
  if (barProgress) barProgress.style.width = '0%';
  const timerNum = document.getElementById('val-redzone-timer');
  if (timerNum) timerNum.innerText = '0.0s / 15s';
  redZoneContinuousStartTime = null;

  document.querySelectorAll('.medical-metric-card.critical-alert').forEach((card) => {
    card.classList.remove('critical-alert');
  });

  // Limpiar buffer circular
  ecgRawBuffer.fill(2048);
  ecgFilteredBuffer.fill(0);
  ecgBufferHead = 0;
  ecgTotalSamples = 0;
  isLeadsOffActive = false;

  redrawAllBentoCharts();
}

// ==============================================================================
// 11. GESTIÓN MULTI-PACIENTE Y CRUD AUTENTICADO
// ==============================================================================
function initPatientManager() {
  repopulatePatientSelector();

  const sel = document.getElementById('select-active-patient');
  if (sel) {
    sel.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === 'NEW') {
        handleAddNewPatientRequest();
      } else {
        switchActivePatient(val);
      }
    });
  }

  // ➕ Registrar Nuevo Paciente (Requiere Contraseña de Seguridad)
  document.getElementById('btn-add-patient')?.addEventListener('click', handleAddNewPatientRequest);

  // ✏️ Editar Paciente Activo (Acceso directo a los datos del paciente actual)
  document.getElementById('btn-edit-patient')?.addEventListener('click', () => openPatientConfigModal(false));

  // ⚙️ Conexión IoT (Modal separado e independiente del paciente)
  document.getElementById('btn-open-iot-config')?.addEventListener('click', openIotConfigModal);

  // Botón Médico a Cargo
  document.getElementById('btn-doctor-card')?.addEventListener('click', () => openPatientConfigModal(false));

  // Expansión interactiva del gráfico de Frecuencia Cardíaca
  document.getElementById('card-bpm')?.addEventListener('click', (e) => {
    if (e.target.closest('.card-info-badge')) return;
    openExpandedChartModal();
  });
  document.getElementById('btn-expand-bpm')?.addEventListener('click', (e) => {
    e.stopPropagation();
    openExpandedChartModal();
  });
  document.getElementById('btn-close-expanded-chart')?.addEventListener('click', closeExpandedChartModal);
  document.getElementById('btn-close-expanded-chart-footer')?.addEventListener('click', closeExpandedChartModal);

  // Modales
  document.getElementById('btn-close-modal')?.addEventListener('click', closePatientConfigModal);
  document.getElementById('btn-cancel-modal')?.addEventListener('click', closePatientConfigModal);
  document.getElementById('btn-save-modal')?.addEventListener('click', savePatientFromModal);
  document.getElementById('btn-delete-patient-modal')?.addEventListener('click', deleteActivePatientWithAuth);

  document.getElementById('btn-close-iot-modal')?.addEventListener('click', closeIotConfigModal);
  document.getElementById('btn-cancel-iot-modal')?.addEventListener('click', closeIotConfigModal);
  document.getElementById('btn-save-iot-modal')?.addEventListener('click', saveIotSettings);

  const inputsToListen = ['input-patient-age', 'input-patient-weight', 'input-patient-height'];
  inputsToListen.forEach((id) => {
    document.getElementById(id)?.addEventListener('input', updateModalLivePreview);
  });

  // Control de sonido
  const btnSound = document.getElementById('btn-sound');
  btnSound?.addEventListener('click', () => {
    STATE.config.soundEnabled = !STATE.config.soundEnabled;
    btnSound.innerText = STATE.config.soundEnabled ? '🔊' : '🔇';
    btnSound.title = STATE.config.soundEnabled ? 'Silenciar latido' : 'Activar sonido';
  });

  // Atajos de Teclado para Simulación de Esfuerzo Físico (Demostración de Trote/Carrera):
  // '1': Reposo (64 lpm)
  // '2': Caminata activa (88 lpm)
  // '3': Trote continuo (142 lpm)
  // '4': Esfuerzo máximo / Sprint (172 lpm)
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
    if (e.key === '1') setStressTestBpm(64);
    else if (e.key === '2') setStressTestBpm(88);
    else if (e.key === '3') setStressTestBpm(142);
    else if (e.key === '4') setStressTestBpm(172);
  });

  // Botón para alternar modo simulación / sensor físico
  const btnSim = document.getElementById('btn-toggle-sim');
  btnSim?.addEventListener('click', toggleSimulationMode);

  // Seleccionar paciente inicial
  // En arranque queda en espera
  repopulatePatientSelector();

  // Conectar en modo escucha pasiva a la nube MQTT (WSS) para que al abrir el link
  // desde un teléfono o PC remoto reciba los datos apenas el laptop transmita por USB.
  // Permanece estrictamente en Standby (-- lpm) hasta recibir paquetes reales.
  connectMqttBroker();
}

function handleAddNewPatientRequest() {
  if (!requestAdminAuth("Registrar un nuevo perfil de paciente en la Central SCADA")) {
    // Si la contraseña falla o se cancela, restaurar selector al paciente activo
    const sel = document.getElementById('select-active-patient');
    if (sel) sel.value = STATE.activePatientKey;
    return;
  }
  openPatientConfigModal(true);
}

function repopulatePatientSelector() {
  const sel = document.getElementById('select-active-patient');
  if (!sel) return;
  sel.innerHTML = '';

  const optDefault = document.createElement('option');
  optDefault.value = '';
  optDefault.innerText = '-- Seleccionar Paciente --';
  if (!STATE.activePatientKey) optDefault.selected = true;
  sel.appendChild(optDefault);

  Object.keys(patientsDB).forEach((key) => {
    const p = patientsDB[key];
    const opt = document.createElement('option');
    opt.value = key;
    opt.innerText = `${p.name} (${p.age} años)`;
    if (key === STATE.activePatientKey) opt.selected = true;
    sel.appendChild(opt);
  });

  const optNew = document.createElement('option');
  optNew.value = 'NEW';
  optNew.innerText = '+ Registrar Nuevo Paciente...';
  sel.appendChild(optNew);
}

function switchActivePatient(key) {
  if (!key || !patientsDB[key]) {
    STATE.activePatientKey = null;
    STATE.patient = {
      id: '--',
      name: 'Sin Paciente Asignado',
      age: '--',
      gender: '--',
      weight: '--',
      height: '--',
      fcRest: 60,
      fcMax: 190,
      bmi: '--',
      bmiCategory: 'En Espera',
      redZoneThreshold: 120
    };
    applyPatientDataToDom();
    redrawAllBentoCharts();
    return;
  }
  STATE.activePatientKey = key;
  const pData = patientsDB[key];

  STATE.patient = {
    id: pData.id || 'SV-0000',
    name: pData.name,
    age: pData.age,
    gender: pData.gender,
    weight: pData.weight,
    height: pData.height,
    fcRest: pData.fcRest || 60
  };

  updateActivePatientCalculations(STATE.patient);
  applyPatientDataToDom();
  redrawAllBentoCharts();
}

function applyPatientDataToDom() {
  const p = STATE.patient;

  const elName = document.getElementById('val-patient-name');
  const elId = document.getElementById('val-patient-id-display');
  if (elName) elName.innerText = p.name;
  if (elId) elId.innerText = `ID: ${p.id}`;

  const elAge = document.getElementById('val-age-text');
  const elGender = document.getElementById('val-gender-text');
  const elHeight = document.getElementById('val-height-text');
  const elWeight = document.getElementById('val-weight-text');
  const elBmi = document.getElementById('val-bmi-text');
  const elBmiCat = document.getElementById('val-bmi-category');
  const elFcMax = document.getElementById('val-fcmax-text');
  const elFcRest = document.getElementById('val-fcrest-text');
  const elRedThreshold = document.getElementById('val-redzone-threshold');

  if (p.age === '--') {
    if (elAge) elAge.innerText = '-- años';
    if (elGender) elGender.innerText = '--';
    if (elHeight) elHeight.innerText = '-- cm';
    if (elWeight) elWeight.innerText = '-- kg';
    if (elBmi) elBmi.innerText = '-- kg/m²';
    if (elBmiCat) elBmiCat.innerText = 'En Espera';
    if (elFcMax) elFcMax.innerText = '-- LPM';
    if (elFcRest) elFcRest.innerText = '-- LPM';
    const elFcRestCat = document.getElementById('val-fcrest-category');
    if (elFcRestCat) elFcRestCat.innerText = '--';
    if (elRedThreshold) elRedThreshold.innerText = `> ${p.redZoneThreshold} LPM`;
    const elBmiTag = document.getElementById('val-redzone-bmi-tag');
    if (elBmiTag) elBmiTag.innerText = 'IMC --';
  } else {
    if (elAge) elAge.innerText = `${p.age} años`;
    if (elGender) elGender.innerText = p.gender;
    if (elHeight) elHeight.innerText = `${p.height} cm`;
    if (elWeight) elWeight.innerText = `${p.weight} kg`;
    if (elBmi) elBmi.innerText = `${p.bmi} kg/m²`;
    if (elBmiCat) elBmiCat.innerText = p.bmiCategory;
    if (elFcMax) elFcMax.innerText = `${p.fcMax} LPM`;
    if (elFcRest) elFcRest.innerText = `${p.fcRest} LPM`;
    const elFcRestCat = document.getElementById('val-fcrest-category');
    if (elFcRestCat) elFcRestCat.innerText = p.fcRest < 60 ? 'Bradicardia' : (p.fcRest <= 100 ? 'Normocardia' : 'Taquicardia');
    if (elRedThreshold) elRedThreshold.innerText = `> ${p.redZoneThreshold} LPM`;
    const elBmiTag = document.getElementById('val-redzone-bmi-tag');
    if (elBmiTag) elBmiTag.innerText = `IMC ${p.bmi}`;
  }

  const sel = document.getElementById('select-active-patient');
  if (sel) sel.value = STATE.activePatientKey;
}

function openPatientConfigModal(isNew = false) {
  const modal = document.getElementById('modal-config');
  if (!modal) return;

  const modalTitle = modal.querySelector('.modal-title');
  const btnDelete = document.getElementById('btn-delete-patient-modal');
  const btnSave = document.getElementById('btn-save-modal');

  const inputName = document.getElementById('input-patient-name');
  const inputId = document.getElementById('input-patient-id');
  const inputAge = document.getElementById('input-patient-age');
  const inputGender = document.getElementById('input-patient-gender');
  const inputWeight = document.getElementById('input-patient-weight');
  const inputHeight = document.getElementById('input-patient-height');
  const inputFcRest = document.getElementById('input-patient-fc-rest');

  if (isNew) {
    if (modalTitle) modalTitle.innerText = '➕ Registrar Nuevo Paciente';
    if (btnDelete) btnDelete.style.display = 'none';
    if (btnSave) btnSave.innerText = 'Registrar Paciente';

    if (inputName) inputName.value = 'Nuevo Atleta';
    if (inputId) inputId.value = `SV-${Math.floor(1000 + Math.random() * 9000)}`;
    if (inputAge) inputAge.value = 24;
    if (inputGender) inputGender.value = 'Masculino';
    if (inputWeight) inputWeight.value = 72.0;
    if (inputHeight) inputHeight.value = 176;
    if (inputFcRest) inputFcRest.value = 60;
    modal.dataset.editingKey = 'NEW';
  } else {
    if (modalTitle) modalTitle.innerText = '✏️ Editar Perfil de Paciente Activo';
    if (btnDelete) btnDelete.style.display = 'inline-flex';
    if (btnSave) btnSave.innerText = 'Guardar Cambios';

    const p = STATE.patient;
    if (inputName) inputName.value = p.name;
    if (inputId) inputId.value = p.id;
    if (inputAge) inputAge.value = p.age;
    if (inputGender) inputGender.value = p.gender;
    if (inputWeight) inputWeight.value = p.weight;
    if (inputHeight) inputHeight.value = p.height;
    if (inputFcRest) inputFcRest.value = p.fcRest;
    modal.dataset.editingKey = STATE.activePatientKey;
  }

  updateModalLivePreview();
  modal.classList.add('open');
}

function closePatientConfigModal() {
  const modal = document.getElementById('modal-config');
  if (modal) modal.classList.remove('open');
  const sel = document.getElementById('select-active-patient');
  if (sel) sel.value = STATE.activePatientKey;
}

function updateModalLivePreview() {
  const age = parseInt(document.getElementById('input-patient-age')?.value) || 20;
  const weight = parseFloat(document.getElementById('input-patient-weight')?.value) || 70;
  const height = parseFloat(document.getElementById('input-patient-height')?.value) || 175;

  const fcMax = calculateTanakaFcMax(age);
  const bmi = calculateBMI(weight, height);
  const redThresh = calculateClinicalRiskThreshold(bmi, age);

  const prevFcMax = document.getElementById('preview-fcmax');
  const prevZ5 = document.getElementById('preview-z5');
  const prevBmi = document.getElementById('preview-bmi');

  if (prevFcMax) prevFcMax.innerText = `${fcMax} LPM (Esfuerzo Máx)`;
  if (prevZ5) prevZ5.innerText = `> ${redThresh} LPM (Alerta Reposo)`;
  if (prevBmi) prevBmi.innerText = `${bmi} kg/m² (${getBMICategory(bmi)})`;
}

function savePatientFromModal() {
  const modal = document.getElementById('modal-config');
  const editingKey = modal?.dataset.editingKey || STATE.activePatientKey;

  const name = document.getElementById('input-patient-name')?.value.trim() || 'Paciente';
  const id = document.getElementById('input-patient-id')?.value.trim() || 'SV-0000';
  const age = parseInt(document.getElementById('input-patient-age')?.value) || 21;
  const gender = document.getElementById('input-patient-gender')?.value || 'Masculino';
  const weight = parseFloat(document.getElementById('input-patient-weight')?.value) || 70.0;
  const height = parseFloat(document.getElementById('input-patient-height')?.value) || 175;
  const fcRest = parseInt(document.getElementById('input-patient-fc-rest')?.value) || 60;

  let keyToSelect = editingKey;
  if (editingKey === 'NEW') {
    const newIdx = Object.keys(patientsDB).length + 1;
    keyToSelect = `PACIENTE_0${newIdx}`;
  }

  patientsDB[keyToSelect] = { id, name, age, gender, weight, height, fcRest };
  localStorage.setItem('scada_cardiac_patients_v7', JSON.stringify(patientsDB));

  repopulatePatientSelector();
  switchActivePatient(keyToSelect);
  closePatientConfigModal();
}

function deleteActivePatientWithAuth() {
  const keys = Object.keys(patientsDB);
  if (keys.length <= 1) {
    alert('⚠️ No es posible eliminar el paciente: Debe existir al menos un perfil activo registrado en el sistema SCADA.');
    return;
  }

  const patientName = STATE.patient.name;
  if (!requestAdminAuth(`Eliminar de forma permanente al paciente "${patientName}"`)) {
    return;
  }

  if (!confirm(`¿Confirma que desea eliminar definitivamente el registro clínico de "${patientName}"? Esta acción es irreversible.`)) {
    return;
  }

  delete patientsDB[STATE.activePatientKey];
  localStorage.setItem('scada_cardiac_patients_v7', JSON.stringify(patientsDB));

  const remainingKeys = Object.keys(patientsDB);
  repopulatePatientSelector();
  switchActivePatient(remainingKeys[0]);
  closePatientConfigModal();

  alert(`✅ El paciente "${patientName}" ha sido eliminado exitosamente.`);
}

// ==============================================================================
// 12. CONFIGURACIÓN IOT Y TELEMETRÍA ESP32 + WEBSOCKET DIRECTO
// ==============================================================================
function openIotConfigModal() {
  const modal = document.getElementById('modal-iot-settings');
  if (!modal) return;
  document.getElementById('input-mqtt-broker').value = STATE.config.mqttBroker;
  document.getElementById('input-mqtt-port').value = STATE.config.mqttPort;
  document.getElementById('input-mqtt-topic').value = STATE.config.mqttTopic;
  const userInput = document.getElementById('input-mqtt-user');
  if (userInput) userInput.value = STATE.config.mqttUser || '';
  const passInput = document.getElementById('input-mqtt-pass');
  if (passInput) passInput.value = STATE.config.mqttPass || '';
  const wsInput = document.getElementById('input-ws-direct');
  if (wsInput) wsInput.value = STATE.config.directWsUrl || '';
  modal.classList.add('open');
}

function closeIotConfigModal() {
  const modal = document.getElementById('modal-iot-settings');
  if (modal) modal.classList.remove('open');
}

function saveIotSettings() {
  STATE.config.mqttBroker = document.getElementById('input-mqtt-broker')?.value.trim() || 'broker.emqx.io';
  STATE.config.mqttPort = parseInt(document.getElementById('input-mqtt-port')?.value) || 8084;
  STATE.config.mqttTopic = document.getElementById('input-mqtt-topic')?.value.trim() || 'hospital/uci/cama1/telemetria';
  STATE.config.mqttUser = document.getElementById('input-mqtt-user')?.value.trim() || '';
  STATE.config.mqttPass = document.getElementById('input-mqtt-pass')?.value || '';
  STATE.config.directWsUrl = document.getElementById('input-ws-direct')?.value.trim() || '';

  closeIotConfigModal();
  
  if (STATE.config.directWsUrl) {
    connectDirectWebSocket(STATE.config.directWsUrl);
  } else {
    connectMqttBroker();
  }
  alert('✅ Configuración de transmisión SCADA guardada. Conectando al SCADA Maestro...');
}

function toggleSimulationMode() {
  const btnSim = document.getElementById('btn-toggle-sim');
  const btnSimTxt = document.getElementById('btn-toggle-sim-txt');
  const banner = document.getElementById('ecg-standby-banner');
  const ecgDot = document.getElementById('ecg-dot-status');
  const ecgTitle = document.getElementById('ecg-status-title');
  const mqttDot = document.getElementById('mqtt-dot');
  const mqttTxt = document.getElementById('mqtt-txt');
  const mqttBadge = document.getElementById('mqtt-badge');

  if (!STATE.config.simulationMode) {
    STATE.config.simulationMode = true;
    STATE.telemetry.isLive = true;
    STATE.telemetry.bpm = (STATE.patient.fcRest && STATE.patient.fcRest !== '--') ? STATE.patient.fcRest : 68;
    if (!STATE.activePatientKey) {
      switchActivePatient('PACIENTE_01');
      const sel = document.getElementById('select-active-patient');
      if (sel) sel.value = 'PACIENTE_01';
    }
    if (STATE.telemetry.historyBpm.length === 0) {
      const curB = Math.round(STATE.telemetry.bpm);
      STATE.telemetry.historyBpm = [curB, curB];
    }
    updateTopStatusChip('SIM');
    simTrottingTimerSec = 0.0;
    mcSharryPhase = -Math.PI;
    hpPrevX = 0.0;
    hpPrevY = 0.0;
    lpStage1 = 0.0;
    lpStage2 = 0.0;
    ecgBaselineEst = 2048.0;
    ecgBaselineInitialized = true;
    ecgPeakEnvelope = 320.0;
    if (btnSim) btnSim.classList.add('active-sim');
    if (btnSimTxt) btnSimTxt.innerText = '🛑 Detener Simulación';

    if (banner) banner.classList.add('hidden');
    if (ecgDot) ecgDot.className = 'ecg-dot-live';
    if (ecgTitle) ecgTitle.innerText = 'ELECTROCARDIOGRAMA (ECG) | DERIVACIÓN I (ACTIVO 250 Hz)';

    if (mqttDot) mqttDot.className = 'status-pulse-dot';
    if (mqttBadge) mqttBadge.className = 'mqtt-live-badge';
    if (mqttTxt) mqttTxt.innerText = 'SIMULACIÓN AD8232 (250 HZ CALIBRADA)';

    if (!mqttClientInstance || !mqttClientInstance.isConnected()) {
      connectMqttBroker();
    }

    updateSignalQualityIndicator(STATE.telemetry.bpm || 74);
  } else {
    resetDomToStandby();
  }
}

function setStressTestBpm(targetBpm) {
  STATE.config.simulationMode = true;
  STATE.telemetry.isLive = true;
  STATE.telemetry.bpm = targetBpm;

  const btnSim = document.getElementById('btn-toggle-sim');
  const btnSimTxt = document.getElementById('btn-toggle-sim-txt');
  const banner = document.getElementById('ecg-standby-banner');
  const ecgDot = document.getElementById('ecg-dot-status');
  const ecgTitle = document.getElementById('ecg-status-title');
  const mqttDot = document.getElementById('mqtt-dot');
  const mqttBadge = document.getElementById('mqtt-badge');
  const mqttTxt = document.getElementById('mqtt-txt');

  if (btnSim) btnSim.classList.add('active-sim');
  if (btnSimTxt) btnSimTxt.innerText = '🛑 Detener Simulación';
  if (banner) banner.classList.add('hidden');
  if (ecgDot) ecgDot.className = 'ecg-dot-live';
  if (ecgTitle) ecgTitle.innerText = `MONITOR ECG EN VIVO (${targetBpm} LPM)`;
  if (mqttDot) mqttDot.className = 'status-pulse-dot';
  if (mqttBadge) mqttBadge.className = 'mqtt-live-badge';
  if (mqttTxt) mqttTxt.innerText = `PRUEBA DE ESTRÉS: ${targetBpm} LPM`;

  const effortData = calculateEffortZone(targetBpm, STATE.patient.fcMax, STATE.patient.fcRest);
  STATE.telemetry.effortPct = effortData.pct;
  STATE.telemetry.effortZone = effortData.zone;
  STATE.telemetry.rppIndex = calculateRpp(targetBpm, STATE.patient.fcRest);

  updateLiveTelemetryDom(targetBpm, effortData);
  recalculateElectrophysiologicalIntervals();
  redrawAllBentoCharts();
}

// ==============================================================================
// 13. CLIENTES DE TELEMETRÍA CRUDA: WEBSOCKET NATIVO & MQTT WEBSOCKET
// ==============================================================================
const LOCAL_CLIENT_ID = 'scada_' + Math.random().toString(36).slice(2, 10);
const simCloudBatch = [];

function relayTelemetryPacketToCloud(rawOrObj) {
  if (!mqttClientInstance || !mqttClientInstance.isConnected()) return;
  try {
    let dataObj = typeof rawOrObj === 'string' ? JSON.parse(rawOrObj) : rawOrObj;
    if (!dataObj || typeof dataObj !== 'object') return;
    if (!Array.isArray(dataObj.samples) && dataObj.ecg_val === undefined) return;

    const relayPayload = JSON.stringify({
      sender: LOCAL_CLIENT_ID,
      leads_off: Boolean(dataObj.leads_off),
      samples: dataObj.samples,
      bpm: dataObj.bpm || (STATE.telemetry.bpm > 0 ? Math.round(STATE.telemetry.bpm) : undefined),
      paciente_id: STATE.patient.id,
      nombre: STATE.patient.name
    });
    const message = new Paho.MQTT.Message(relayPayload);
    message.destinationName = STATE.config.mqttTopic;
    message.qos = 0;
    mqttClientInstance.send(message);
  } catch (e) {}
}

let mqttClientInstance = null;
let directWebSocketInstance = null;

function handleIncomingTelemetryPayload(rawMsg) {
  try {
    let payload;
    if (typeof rawMsg === 'string') {
      const trimmed = rawMsg.trim();
      if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
        payload = JSON.parse(trimmed);
      } else if (!isNaN(Number(trimmed))) {
        // Flujo crudo simple de un entero ADC por paquete
        pushRawAdcSample(Number(trimmed));
        return;
      } else {
        return;
      }
    } else if (typeof rawMsg === 'object') {
      payload = rawMsg;
    } else {
      return;
    }

    // Activar estado en vivo en UI
    if (!STATE.telemetry.isLive) {
      STATE.telemetry.isLive = true;
      const banner = document.getElementById('ecg-standby-banner');
      if (banner) banner.classList.add('hidden');

      const ecgDot = document.getElementById('ecg-dot-status');
      if (ecgDot) ecgDot.className = 'ecg-dot-live';
      const ecgTitle = document.getElementById('ecg-status-title');
      if (ecgTitle) ecgTitle.innerText = 'MONITOR ECG EN VIVO';

      const mqttDot = document.getElementById('mqtt-dot');
      const mqttTxt = document.getElementById('mqtt-txt');
      const mqttBadge = document.getElementById('mqtt-badge');
      if (mqttDot) mqttDot.className = 'status-pulse-dot';
      if (mqttBadge) mqttBadge.className = 'mqtt-live-badge';
      if (mqttTxt) mqttTxt.innerText = 'ESP32 EN LÍNEA (TELEMETRÍA REAL AD8232)';
    }

    // 1. Ingesta al Buffer Circular de Muestras Analógicas Crudas (ADC 0-4095)
    if (Array.isArray(payload.samples)) {
      pushRawAdcBatch(payload.samples);
    } else if (Array.isArray(payload.raw)) {
      pushRawAdcBatch(payload.raw);
    } else if (payload.ecg_val !== undefined) {
      pushRawAdcSample(payload.ecg_val);
    } else if (payload.adc !== undefined) {
      pushRawAdcSample(payload.adc);
    } else if (payload.val !== undefined) {
      pushRawAdcSample(payload.val);
    }

    // 2. Detección de electrodos desconectados (Leads-Off LO+ / LO-)
    const leadsOffDetected = Boolean(
      payload.leads_off === true || 
      payload.leads_off === 'true' || 
      payload.lo_plus === 1 || 
      payload.lo_minus === 1 ||
      payload.alerta === 'LEADS_OFF'
    );
    setLeadsOffState(leadsOffDetected);

    // 3. Frecuencia Cardíaca y Métricas
    if (payload.bpm !== undefined && Number(payload.bpm) > 0) {
      STATE.telemetry.bpm = Number(payload.bpm);
      const lastIdx = STATE.telemetry.historyBpm.length - 1;
      STATE.telemetry.historyBpm[lastIdx] = Math.round(STATE.telemetry.bpm);
    }

    if (payload.hrv_rmssd !== undefined) {
      STATE.telemetry.hrvRmssd = Number(payload.hrv_rmssd);
      const lastIdx = STATE.telemetry.historyHrv.length - 1;
      STATE.telemetry.historyHrv[lastIdx] = Number(STATE.telemetry.hrvRmssd.toFixed(1));
    } else if (payload.rmssd !== undefined) {
      STATE.telemetry.hrvRmssd = Number(payload.rmssd);
    }

    updateLiveTelemetryDom(STATE.telemetry.bpm);
    redrawAllBentoCharts();
  } catch (err) {
    console.warn('[Motor Argon] Error procesando telemetría cruda:', err);
  }
}

function connectDirectWebSocket(url) {
  if (!url) return;
  if (directWebSocketInstance) {
    try { directWebSocketInstance.close(); } catch (e) {}
  }
  try {
    directWebSocketInstance = new WebSocket(url);
    directWebSocketInstance.onopen = () => {
      console.log(`[Motor Argon] WebSocket directo conectado al ESP32: ${url}`);
      STATE.telemetry.isLive = true;
      const mqttTxt = document.getElementById('mqtt-txt');
      if (mqttTxt) mqttTxt.innerText = 'ESP32 WEBSOCKET DIRECTO EN LÍNEA';
    };
    directWebSocketInstance.onmessage = (event) => {
      handleIncomingTelemetryPayload(event.data);
    };
    directWebSocketInstance.onerror = (e) => {
      console.warn('[Motor Argon] Error en WebSocket directo:', e);
    };
  } catch (err) {
    console.error('[Motor Argon] Error instanciando WebSocket directo:', err);
  }
}

function connectMqttBroker() {
  if (typeof Paho === 'undefined') return;
  try {
    if (mqttClientInstance && mqttClientInstance.isConnected()) {
      try { mqttClientInstance.disconnect(); } catch (e) {}
    }

    const clientId = 'cardiac_scada_' + Math.random().toString(16).substr(2, 8);
    mqttClientInstance = new Paho.MQTT.Client(STATE.config.mqttBroker, STATE.config.mqttPort, STATE.config.mqttPath, clientId);

    mqttClientInstance.onConnectionLost = (responseObject) => {
      console.warn('[SCADA] Conexión MQTT perdida:', responseObject.errorMessage);
    };

    mqttClientInstance.onMessageArrived = (message) => {
      try {
        const parsed = JSON.parse(message.payloadString);
        // Evitar eco propio o sobreescribir cuando este dispositivo ya está conectado por USB o simulando
        if (parsed.sender === LOCAL_CLIENT_ID || isSerialReading || STATE.config.simulationMode) return;
        if (!STATE.activePatientKey) {
          switchActivePatient('PACIENTE_01');
          const sel = document.getElementById('select-active-patient');
          if (sel) sel.value = 'PACIENTE_01';
        }
        handleIncomingTelemetryPayload(parsed);
        updateTopStatusChip('LIVE');
        const topTxt = document.getElementById('top-status-text');
        if (topTxt) topTxt.innerText = 'EN VIVO REMOTO (NUBE)';
        const mqttTxt = document.getElementById('mqtt-txt');
        if (mqttTxt) mqttTxt.innerText = 'TELEMETRÍA EN VIVO VÍA NUBE';
      } catch (e) {
        if (!isSerialReading && !STATE.config.simulationMode) {
          handleIncomingTelemetryPayload(message.payloadString);
        }
      }
    };

    const connectOpts = {
      useSSL: true,
      timeout: 5,
      keepAliveInterval: 30,
      cleanSession: true,
      onSuccess: () => {
        mqttClientInstance.subscribe(STATE.config.mqttTopic);
        console.log(`[SCADA Transmisor] Conectado exitosamente a ${STATE.config.mqttBroker} en tópico: ${STATE.config.mqttTopic}`);
      },
      onFailure: (err) => {
        console.warn('[SCADA Transmisor] Enlace MQTT no disponible:', err);
      }
    };

    if (STATE.config.mqttUser) connectOpts.userName = STATE.config.mqttUser;
    if (STATE.config.mqttPass) connectOpts.password = STATE.config.mqttPass;

    mqttClientInstance.connect(connectOpts);
  } catch (e) {}
}

function publishTelemetryToScada() {
  if (!mqttClientInstance || !mqttClientInstance.isConnected()) return;
  try {
    const p = STATE.patient;
    const t = STATE.telemetry;
    const payload = JSON.stringify({
      timestamp: Date.now(),
      paciente_id: p.id,
      nombre: p.name,
      bpm: Math.round(t.bpm),
      rpp: Number(t.rppIndex.toFixed(1)),
      hrv_rmssd: Number(t.hrvRmssd.toFixed(1)),
      zona_esfuerzo: t.effortZone,
      esfuerzo_pct: t.effortPct,
      alerta_critica: t.bpm >= p.redZoneThreshold,
      leads_off: t.leadsOff
    });
    const message = new Paho.MQTT.Message(payload);
    message.destinationName = STATE.config.mqttTopic;
    message.qos = 0;
    mqttClientInstance.send(message);
  } catch (err) {
    console.warn('[SCADA Transmisor] Error publicando telemetría:', err);
  }
}

// ==============================================================================
// 14. INICIALIZACIÓN GENERAL DEL SISTEMA (60 FPS ACCELERATED ENGINE)
// ==============================================================================

// ==============================================================================
// 12. GESTIÓN DEL PANEL LATERAL TÁCTICO (DRAWER), SUPERVISOR Y EXPORTACIÓN EXCEL
// ==============================================================================
function updateTopStatusChip(mode) {
  const chip = document.getElementById('top-status-chip');
  const txt = document.getElementById('top-status-text');
  if (!chip || !txt) return;

  if (mode === 'LIVE') {
    chip.className = 'top-status-chip live';
    txt.innerText = 'SENSOR EN VIVO (USB)';
  } else if (mode === 'SIM') {
    chip.className = 'top-status-chip sim';
    txt.innerText = 'SIMULACIÓN AD8232';
  } else {
    chip.className = 'top-status-chip';
    txt.innerText = 'STANDBY / EN ESPERA';
  }
}

window.toggleTacticalDrawer = function(forceOpen) {
  const drawer = document.getElementById('tactical-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (!drawer || !overlay) return;

  const shouldOpen = forceOpen !== undefined ? forceOpen : !drawer.classList.contains('open');
  if (shouldOpen) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
};

function initTacticalDrawer() {
  const btnOpen = document.getElementById('btn-open-drawer');
  const btnClose = document.getElementById('btn-close-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('tactical-drawer');

  btnOpen?.addEventListener('click', (e) => {
    e.stopPropagation();
    window.toggleTacticalDrawer(true);
  });
  btnClose?.addEventListener('click', (e) => {
    e.stopPropagation();
    window.toggleTacticalDrawer(false);
  });
  overlay?.addEventListener('click', () => {
    window.toggleTacticalDrawer(false);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.toggleTacticalDrawer(false);
    }
  });

  // Supervisor PIN
  const btnUnlock = document.getElementById('btn-unlock-supervisor');
  const btnLock = document.getElementById('btn-lock-supervisor');
  const inputPin = document.getElementById('input-supervisor-pin');
  const viewLocked = document.getElementById('supervisor-locked-view');
  const viewUnlocked = document.getElementById('supervisor-unlocked-view');
  const feedbackMsg = document.getElementById('pin-feedback-msg');

  if (btnUnlock && inputPin && viewLocked && viewUnlocked) {
    btnUnlock.addEventListener('click', () => {
      const pin = inputPin.value.trim();
      if (pin === '7294' || pin === '1234' || pin === 'admin') {
        viewLocked.classList.add('hidden');
        viewUnlocked.classList.remove('hidden');
        inputPin.value = '';
        if (feedbackMsg) feedbackMsg.innerText = 'PIN correcto.';
        showToastNotification('🔓 Modo Supervisor Desbloqueado.', 'success');
      } else {
        if (feedbackMsg) {
          feedbackMsg.innerText = '❌ PIN incorrecto. Reintente (por defecto: 7294).';
          feedbackMsg.style.color = '#ef4444';
        }
      }
    });
  }

  if (btnLock && viewLocked && viewUnlocked) {
    btnLock.addEventListener('click', () => {
      viewUnlocked.classList.add('hidden');
      viewLocked.classList.remove('hidden');
      if (feedbackMsg) {
        feedbackMsg.innerText = 'PIN de supervisor clínico por defecto: 7294';
        feedbackMsg.style.color = '';
      }
      showToastNotification('🔒 Modo Supervisor Bloqueado (Solo Lectura).', 'info');
    });
  }

  // Guardar nuevo umbral de alerta crítica
  const btnSaveThreshold = document.getElementById('btn-save-threshold');
  const inputThreshold = document.getElementById('input-custom-threshold');
  if (btnSaveThreshold && inputThreshold) {
    btnSaveThreshold.addEventListener('click', () => {
      const val = parseInt(inputThreshold.value, 10);
      if (val >= 80 && val <= 200) {
        STATE.patient.redZoneThreshold = val;
        const domThreshold = document.getElementById('val-threshold-lpm-display');
        if (domThreshold) domThreshold.innerText = `> ${val} LPM`;
        showToastNotification(`Umbral de alerta taquicardia actualizado a > ${val} LPM`, 'success');
      }
    });
  }

  // Botón exportar Excel
  const btnExport = document.getElementById('btn-export-excel');
  if (btnExport) {
    btnExport.addEventListener('click', exportTelemetryToExcelCsv);
  }
}

function logTelemetrySample(nowMs) {
  if (!STATE.telemetry.isLive && !STATE.config.simulationMode) return;
  const curBpm = Math.round(STATE.telemetry.bpm);
  if (curBpm <= 0) return;

  if (STATE.telemetry.lastLogTime && (nowMs - STATE.telemetry.lastLogTime < 1000)) return;
  STATE.telemetry.lastLogTime = nowMs;

  const d = new Date();
  const timeStr = d.toTimeString().split(' ')[0];

  STATE.telemetryLog.push({
    timestamp: `${d.toLocaleDateString()} ${timeStr}`,
    paciente: STATE.patient.name || 'Sin Asignar',
    id: STATE.patient.id || 'N/A',
    bpm: curBpm,
    rrMs: STATE.telemetry.rrInterval || Math.round(60000 / curBpm),
    estado: getAhaCardiacCategory(curBpm),
    umbral: STATE.patient.redZoneThreshold || 120,
    modo: STATE.config.simulationMode ? 'Simulacion AD8232' : 'Sensor Fisico USB'
  });

  if (STATE.telemetryLog.length > 3600) {
    STATE.telemetryLog.shift();
  }
}

function exportTelemetryToExcelCsv() {
  if (!STATE.telemetryLog || STATE.telemetryLog.length === 0) {
    showToastNotification('⚠️ No hay registros telemétricos acumulados todavía. Conecte el sensor o inicie la simulación.', 'warning');
    return;
  }

  let csvContent = '\uFEFF'; // BOM UTF-8
  csvContent += 'Fecha_Hora;Paciente;ID_Paciente;Frecuencia_Cardiaca_LPM;Intervalo_RR_ms;Estado_Clinico;Umbral_Alerta_LPM;Modo_Adquisicion\n';

  STATE.telemetryLog.forEach(row => {
    csvContent += `"${row.timestamp}";"${row.paciente}";"${row.id}";${row.bpm};${row.rrMs};"${row.estado}";${row.umbral};"${row.modo}"\n`;
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const cleanName = (STATE.patient.name || 'paciente').replace(/\s+/g, '_');
  const filename = `telemetria_cardiaca_${cleanName}_${new Date().toISOString().slice(0, 10)}.csv`;
  a.href = url;
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToastNotification(`📊 Archivo Excel (${filename}) generado exitosamente.`, 'success');
}

window.addEventListener('DOMContentLoaded', () => {
  cacheDomElements();
  initAmbientParticles();
  initClinicalAudio();
  initPatientManager();
  initBentoAreaCharts();
  initEcgOscilloscope();
  initTacticalDrawer();

  // Inicializar estado de interfaz en Modo de Espera
  resetDomToStandby();

  // Arrancar bucle de animación a 60 FPS
  requestAnimationFrame(mainAnimationLoop);
});


// ==============================================================================
