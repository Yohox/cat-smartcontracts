"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const burnGuard_1 = require("./contracts/token/burnGuard");
const closedMinter_1 = require("./contracts/token/closedMinter");
const openMinter_1 = require("./contracts/token/openMinter");
const cat20_1 = require("./contracts/token/cat20");
const transferGuard_1 = require("./contracts/token/transferGuard");
(() => {
    closedMinter_1.ClosedMinter.loadArtifact((0, path_1.join)(__dirname, '..', 'artifacts/contracts/token/closedMinter.json'));
    openMinter_1.OpenMinter.loadArtifact((0, path_1.join)(__dirname, '..', 'artifacts/contracts/token/openMinter.json'));
    cat20_1.CAT20.loadArtifact((0, path_1.join)(__dirname, '..', 'artifacts/contracts/token/cat20.json'));
    burnGuard_1.BurnGuard.loadArtifact((0, path_1.join)(__dirname, '..', 'artifacts/contracts/token/burnGuard.json'));
    transferGuard_1.TransferGuard.loadArtifact((0, path_1.join)(__dirname, '..', 'artifacts/contracts/token/transferGuard.json'));
})();
__exportStar(require("./contracts/token/closedMinter"), exports);
__exportStar(require("./contracts/token/cat20"), exports);
__exportStar(require("./contracts/token/burnGuard"), exports);
__exportStar(require("./contracts/token/transferGuard"), exports);
__exportStar(require("./contracts/token/cat20Proto"), exports);
__exportStar(require("./contracts/token/closedMinterProto"), exports);
__exportStar(require("./contracts/token/guardProto"), exports);
__exportStar(require("./contracts/token/openMinter"), exports);
__exportStar(require("./contracts/token/openMinterProto"), exports);
__exportStar(require("./contracts/utils/txUtil"), exports);
__exportStar(require("./contracts/utils/txProof"), exports);
__exportStar(require("./contracts/utils/stateUtils"), exports);
__exportStar(require("./contracts/utils/backtrace"), exports);
__exportStar(require("./contracts/utils/sigHashUtils"), exports);
__exportStar(require("./lib/state"), exports);
__exportStar(require("./lib/proof"), exports);
__exportStar(require("./lib/txTools"), exports);
__exportStar(require("./lib/commit"), exports);
__exportStar(require("./lib/guardInfo"), exports);
//# sourceMappingURL=index.js.map