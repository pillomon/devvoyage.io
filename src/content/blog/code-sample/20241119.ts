export const SAMPLE_1 = `# vite-react-typescript 프로젝트 시작
pnpm create vite first-electron --template react-ts

# Electron 및 빌드 관련 패키지 추가
pnpm add -D electron electron-builder wait-on concurrently`;
export const SAMPLE_2 = `"scripts": {
	"dev": "vite",
    "lint": "eslint .",
    "preview": "vite preview",
    "electron": "wait-on http://localhost:5173 && electron .",
    "electron:dev": "concurrently \"pnpm dev\" \"pnpm electron\"",
    "electron:package": "tsc -b && vite build",
    "electron:build": "pnpm electron:package && electron-builder --win --x64 --config electron-builder.json"
},
"main": "./public/main.cjs",`;
export const SAMPLE_3 = `{
  // 앱의 고유 식별자, 보통 역방향 도메인 표기법을 사용합니다.
  "appId": "com.first-electron",
  // 애플리케이션의 이름입니다.
  "productName": "First Electron",
  // 빌드된 파일들이 저장될 디렉토리를 지정합니다.
  "directories": {
    "output": "build"
  },
  // electron 빌드에 필요한 파일들을 지정합니다.
  "files": ["dist/**/*", "node_modules/**/*", "public/**/*"],
  // windows 관련 설정입니다.
  "win": {
    "target": [
      {
        "target": "nsis",
        "arch": ["x64"]
      }
    ],
    "icon": "./public/icon.ico"
  },
  // windows 인스톨러 관련 설정입니다.
  "nsis": {
    // 설치 파일의 이름 형식
    "artifactName": "First_Electron_Installer.\${ext}",
    // false로 설정하여 사용자 정의 옵션 설치 제공
    "oneClick": false,
    // true로 설정하여 사용자가 설치 경로 변경 가능
    "allowToChangeInstallationDirectory": true,
    // true로 설정하여 바탕화면 바로가기 생성
    "createDesktopShortcut": true,
    // true로 설정하여 시작 메뉴 바로가기 생성
    "createStartMenuShortcut": true,
    // 바로가기의 이름
    "shortcutName": "AdsKit Commander",
    // 제거 시 앱 데이터도 함께 삭제
    "deleteAppDataOnUninstall": true
  }
}`;
export const SAMPLE_4 = `const { Menu, BrowserWindow, app } = require('electron');
const path = require('path');
require('./ipcHandler.cjs');

// public 폴더에 있는 preload.js를 위한 경로 설정
const preloadPath = path.join(__dirname, 'preload.cjs');

// 개발 환경에서 사용할 기본 URL입니다.
const BASE_URL = 'http://localhost:5173';
// app이 packaging(build)되었는지 확인해서 dev와 production을 구분합니다.
const isDev = !app.isPackaged;

// BrowserWindow 객체는 전역으로 관리합니다.
// 전역이 아닌 경우 자바스크립트 가비지 컬렉팅 발생 시 의도치 않게 browser window가 닫힐 수 있습니다.
let mainWindow = null;

const createWindow = () => {
  // 메뉴가 불필요하여 빈 메뉴로 설정 후 적용했습니다.
  Menu.setApplicationMenu(Menu.buildFromTemplate([]));

  // BrowserWindow 인스턴스를 생성하여 전역객체에 할당합니다.
  mainWindow = new BrowserWindow({
    // 가로 사이즈
    width: 800,
    // 세로 사이즈
    height: 600,
    // position
    center: true,
    // 사이즈 조절 유무
    resizable: false,
    webPreferences: {
      // 개발 도구(devTools) 사용 유무
      devTools: isDev,
      // Node.js 통합 비활성화 - 보안을 위해 렌더러 프로세스에서 Node.js API 직접 사용 방지
      nodeIntegration: false,
      // 컨텍스트 격리 활성화 - 메인 프로세스와 렌더러 프로세스의 실행 컨텍스트를 분리
      contextIsolation: true,
      // preload 스크립트 경로 - 안전하게 메인 프로세스와 렌더러 프로세스 간 통신을 설정
      preload: preloadPath,
      // 샌드박스 활성화 - 렌더러 프로세스의 샌드박스 모드 설정
      sandbox: true,
    },
  });

  if (isDev) {
    // vite로 실행된 localhost:5173의 index.html을 로드합니다.
    mainWindow.loadURL(BASE_URL);
    // devTools를 detach로 오픈합니다.
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  } else {
    // react build 아티팩트의 index.html의 경로를 지정하여 해당 파일을 로드합니다.
    mainWindow.loadFile(\`\${app.getAppPath()}/dist/index.html\`);
  }
};

// Electron이 준비되면 whenReady 메서드가 호출되어, 초기화 및 browser window를 생성
app.whenReady().then(() => {
  createWindow();

  // macOS에서는 창을 모두 닫아도 앱이 완전히 종료되지 않습니다.
  // 백그라운드에서 돌아가는 앱을 다시 Dock에서 클릭했을 때 activate 이벤트가 갑지되어 새창을 띄워줍니다.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 모든 창을 닫는 이벤트가 탐지되면 앱을 종료시킵니다.
// 다만 macOS(darwin)에서는 창이 닫혀도 앱이 완전히 종료되지 않기 때문에 조건문 처리를 했습니다.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});`;
export const SAMPLE_5 = `const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  invokePing: (text) => ipcRenderer.invoke('invoke-ping', { text }),
  onPing: (text) => ipcRenderer.on('on-ping', { text }),
});`;
export const SAMPLE_6 = `export {};

declare global {
	interface Window {
    	electron: {
      		invokePing: (
        		text: string;
      		) => Promise<string>;
      		onPing: (
        		echoText: () => string;
      		) => void;
    	};
  	}
}`;
export const SAMPLE_7 = `export default function Button() {
  const handleButtonClick = async () => {
    if (!window) return;
    const response = await window.electron.invokePing('ping');

    // expect "Received: ping"
    console.log(response);
  };
  return <button onClick={handleButtonClick}>ping</button>;
}`;
export const SAMPLE_8 = `ipcMain.handle('invoke-ping', (event, message) => {
  console.log('invokie-ping received from renderer.');

  const { text } = message;
  const response = \`Received: \${text}\`;

  return response;
});`;
