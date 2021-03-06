import Router from "koa-router";
import userController from "../controllers/userController";
import vehicleController from "../controllers/vehicleController";
import HistoryItemController from "../controllers/historyItemController";
import homeController from "../controllers/homeController";

export const crudRouter: Router = new Router();

//home
crudRouter.get("/", homeController.home);

//user
crudRouter.get("/users", userController.getUsers);
crudRouter.get("/users/:id", userController.getUser);
crudRouter.post("/users", userController.createUser);
crudRouter.put("/users/:id", userController.updateUser);
crudRouter.delete("/users/:id", userController.deleteUser);
crudRouter.get("/users/:id/vehicles", userController.getUserVehicles);

//vehicle
crudRouter.get("/vehicles", vehicleController.getVehicles);
crudRouter.get("/vehicles/byUserId/:id", vehicleController.getVehicleByUserId);
crudRouter.get("/vehicles/:id", vehicleController.getVehicle);
crudRouter.post("/vehicles", vehicleController.createVehicle);
crudRouter.delete("/vehicles/:id", vehicleController.deleteById);

crudRouter.get(
  "/vehicles/byregistration/:registration",
  vehicleController.getVehicleByRegistration
);

//dev
crudRouter.delete("/vehicles", vehicleController.deleteAll);

//history items
crudRouter.get("/historyitems", HistoryItemController.getHistoryItems);
