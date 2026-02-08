import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useAppStore = create(
   devtools(
      persist(
         (set, get) => ({
            // Language State
            language: 'en',
            setLanguage: (lang) => set({ language: lang }),

            // Theme State
            theme: 'light',
            setTheme: (theme) => set({ theme }),

            // User State
            isAuthenticated: false,
            user: null,

            login: (email, password) => {
               // Hardcoded check
               if ((email === 'admin' || email === 'admin@tahwul.com') && password === 'password') {
                  const user = {
                     id: 1,
                     name: 'Mohamed',
                     role: 'Admin',
                     email
                  };
                  set({ user, isAuthenticated: true });
                  return { success: true };
               }
               return { success: false, error: 'Invalid credentials' };
            },

            logout: () => set({ user: null, isAuthenticated: false }),

            setUser: (user) => set({ user }),

            // Projects State
            projects: [],
            selectedProject: null,
            setProjects: (projects) => set({ projects }),
            setSelectedProject: (project) => set({ selectedProject: project }),
            addProject: (project) => set((state) => ({
               projects: [...state.projects, project]
            })),
            updateProject: (id, updatedProject) => set((state) => ({
               projects: state.projects.map((p) =>
                  p.id === id ? { ...p, ...updatedProject } : p
               )
            })),
            deleteProject: (id) => set((state) => ({
               projects: state.projects.filter((p) => p.id !== id)
            })),

            // Dashboard Stats
            dashboardStats: {
               totalProjects: 0,
               completed: 0,
               inProgress: 0,
               underReview: 0,
               overallProgress: 0
            },
            setDashboardStats: (stats) => set({ dashboardStats: stats }),

            // Filters
            filters: {
               status: 'all',
               perspective: 'all',
               dateRange: 'all'
            },
            setFilters: (filters) => set((state) => ({
               filters: { ...state.filters, ...filters }
            })),
            resetFilters: () => set({
               filters: {
                  status: 'all',
                  perspective: 'all',
                  dateRange: 'all'
               }
            }),

            // Loading States
            loading: {
               projects: false,
               dashboard: false,
               details: false
            },
            setLoading: (key, value) => set((state) => ({
               loading: { ...state.loading, [key]: value }
            })),

            // Sidebar State
            sidebarOpen: true,
            toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

            // Notifications
            notifications: [],
            addNotification: (notification) => set((state) => ({
               notifications: [...state.notifications, {
                  id: Date.now(),
                  ...notification
               }]
            })),
            removeNotification: (id) => set((state) => ({
               notifications: state.notifications.filter((n) => n.id !== id)
            })),

            // Search Query
            searchQuery: '',
            setSearchQuery: (query) => set({ searchQuery: query }),

            // Reset Store
            resetStore: () => set({
               projects: [],
               selectedProject: null,
               searchQuery: '',
               filters: {
                  status: 'all',
                  perspective: 'all',
                  dateRange: 'all'
               }
            })
         }),
         {
            name: 'tahwul-app-storage',
            partialize: (state) => ({
               language: state.language,
               theme: state.theme,
               sidebarOpen: state.sidebarOpen,
               user: state.user,
               isAuthenticated: state.isAuthenticated
            })
         }
      )
   )
);

export default useAppStore;
