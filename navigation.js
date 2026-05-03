const navHTML = `
<nav class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
    <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between py-2 md:h-16">
            <!-- LOGO I MOBILNI LOGOUT -->
            <div class="flex items-center justify-between w-full md:w-auto">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                        <i class="fas fa-tooth text-primary-600 dark:text-primary-400"></i>
                    </div>
                    <span class="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap">Dental Clinic</span>
                </div>
                <div class="flex items-center space-x-2 md:hidden">
                    <button onclick="toggleTheme()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <i id="themeIconMobile" class="fas fa-moon text-gray-600 dark:text-gray-300"></i>
                    </button>
                    <button onclick="logout()" class="px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm">
                        <i class="fas fa-sign-out-alt"></i>
                    </button>
                </div>
            </div>
            <!-- CENTRALNA NAVIGACIJA -->
            <div class="w-full md:w-auto mt-3 md:mt-0 md:flex-1 md:flex md:justify-center">
                <div class="grid grid-cols-3 gap-1 md:flex md:space-x-1 p-1 bg-gray-50 dark:bg-gray-700/50 md:bg-transparent rounded-xl">
                    <button onclick="window.location.href='appointments.html'" class="nav-btn px-2 py-2 md:px-4 rounded-lg text-xs md:text-base text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 transition-all flex flex-col md:flex-row items-center justify-center">
                        <i class="fas fa-calendar-alt md:mr-2 mb-1 md:mb-0"></i>
                        <span>Appointments</span>
                    </button>
                    <button onclick="window.location.href='patients.html'" class="nav-btn px-2 py-2 md:px-4 rounded-lg text-xs md:text-base text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 transition-all flex flex-col md:flex-row items-center justify-center">
                        <i class="fas fa-users md:mr-2 mb-1 md:mb-0"></i>
                        <span>Patients</span>
                    </button>
                    <button onclick="window.location.href='finances.html'" class="nav-btn px-2 py-2 md:px-4 rounded-lg text-xs md:text-base text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 transition-all flex flex-col md:flex-row items-center justify-center">
                        <i class="fas fa-dollar-sign md:mr-2 mb-1 md:mb-0"></i>
                        <span>Finances</span>
                    </button>
                </div>
            </div>
            <!-- DESNI LOGOUT (DESKTOP) -->
            <div class="hidden md:flex items-center space-x-3">
                <button onclick="toggleTheme()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <i id="themeIcon" class="fas fa-moon text-gray-600 dark:text-gray-300"></i>
                </button>
                <button onclick="logout()" class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">
                    <i class="fas fa-sign-out-alt mr-1"></i>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    </div>
</nav>
`;

// Funkcija koja ubacuje ovaj HTML u dokument
document.addEventListener("DOMContentLoaded", () => {
    const navPlaceholder = document.getElementById("main-nav");
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
    }
});