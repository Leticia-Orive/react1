import { configureStore, Middleware, MiddlewareAPI, Dispatch, AnyAction } from "@reduxjs/toolkit";
import { toast } from 'sonner';
import usersReducer, { rollbackUser } from "../store/users/slice";

// Define the RootState type
export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistanceLocalStorageMiddleware: Middleware = (store: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

const syncWithDatabaseMiddleware: Middleware = (store: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next) => (action) => {
    const { type, payload } = action as AnyAction; // Use AnyAction type to ensure we can destructure type and payload
    const previousState = store.getState();

    next(action);

    if (type === 'users/deleteUserById') { // Handling specific action type
        const userIdToRemove = payload;
        const userToRemove = previousState.users.find(user => user.id === userIdToRemove);

        fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error al eliminar el usuario');
                }
                toast.success(`Usuario ${payload} eliminado correctamente`);
            })
            .catch(err => {
                toast.error(`Error deleting user ${userIdToRemove}`);
                if (userToRemove) store.dispatch(rollbackUser(userToRemove));
                console.log(err);
            });
    }
};


