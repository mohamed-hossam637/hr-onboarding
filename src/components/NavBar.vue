<template>
    <header class="shadow-sm py-4 nav-bar m-0">
        <div class="container">
            <nav class=" d-flex align-items-center p-0 m-0">
                <div class="logo">
                    <img src="../assets/elaraby.webp" alt="elaraby logo" loading="lazy">
                </div>
                <ul class="nav-links m-0 hide-sm">
                    <li>
                        <router-link to="/">
                            main page
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about">
                            about on boarding / off boarding
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Benefits">
                            Benefits of ON-BOARDING
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/OffBoarding">
                            Off Boarding
                        </router-link>
                    </li>
                </ul>
                <!-- mobile menu btn -->
                <div class="ms-2 hide-lg mobile-menu-icon" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
                        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path style="fill: #fff;"
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>

                </div>
            </nav>
        </div>
    </header>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <div class="logo offcanvas-title" id="offcanvasRightLabel">
                <img src="../assets/elaraby.webp" alt="elaraby logo" loading="lazy">
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="p-2 m-0 mobile-links">
                <li aria-label="Close" data-bs-dismiss="offcanvas">
                    <router-link to="/">
                        main page
                    </router-link>
                </li>
                <li aria-label="Close" data-bs-dismiss="offcanvas">
                    <router-link to="/about">
                        about on boarding / off boarding
                    </router-link>
                </li>
                <li aria-label="Close" data-bs-dismiss="offcanvas">
                    <router-link to="/Benefits">
                        Benefits of ON-BOARDING
                    </router-link>
                </li>
                <li aria-label="Close" data-bs-dismiss="offcanvas">
                    <router-link to="/OffBoarding">
                        Off Boarding
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    name: "NavBar",

}

</script>
<style scoped>
header {
    background-color: var(--main-color);
}

.nav-links {
    list-style: none;
}

.nav-links li {
    display: inline-block;
}

.nav-links li:not(:last-child) {
    margin-right: 18px;
}

.nav-links li a {
    font-weight: bold;
    font-size: 1.3em;
    padding: 5px 10px;
    border-radius: 6px;
    transition: all 0.5s;
    color: #fff;
    text-transform: capitalize;
}

.nav-links li a.router-link-exact-active,
.nav-links li a:hover {
    color: var(--main-color);
    background-color: #fff;
}

.logo {
    height: 3em;
}

.logo img {
    width: 100%;
    height: 100%;
}

.hide-lg {
    display: none;
}
.mobile-links{
    list-style: none;
}
.mobile-links li {
    text-align: left;
    margin-bottom: 20px;
}
.mobile-links li a.router-link-exact-active {
    color: #fff;
    background-color: var(--main-color);
}
.mobile-links li a {
    font-weight: bold;
    font-size: 1em;
    padding: 5px 10px;
    border-radius: 6px;
    transition: all 0.5s;
    color: var(--main-color);
    text-transform: capitalize;
}
/* .offcanvas-title {
    background-color: var(--main-color);
} */
@media(max-width: 767px) {
    header.nav-bar nav {
        flex-direction: column;
        justify-content: center;
    }

    header.nav-bar nav .logo {
        margin-bottom: 20px;
    }

    .hide-sm {
        display: none;
    }

    .hide-lg {
        display: block;
    }
}
</style>