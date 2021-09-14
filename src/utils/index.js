import { getMenus } from "@/common";

export const USER_INFO = "USER_INFO";
export const TOKEN = "admin_token";
export const MENU = "MENU";
export const VISIBEL = "COMPONENTS_VISIBEL";
// 获取默认页面
async function getDefaultMenu() {
  let openKeys = [],
    selectKey = [],
    openedMenu = [];
  const res = await getMenus();
  res.data.some((list) => {
    const child = list.children;
    if (child && child.length) {
      openKeys = [list.key];
      selectKey = [child[0]["key"]];
      openedMenu = [child[0]];
      return true;
    }
    return false;
  });

  return {
    openKeys,
    selectKey,
    openedMenu,
  };
}

function getSessionUser() {
  return getKey(false, USER_INFO);
}

function saveUser(info) {
  setKey(true, USER_INFO, info);
  setKey(false, USER_INFO, info);
}

function sleep(seconed) {
  return new Promise((res, rej) => {
    setTimeout(res, seconed);
  });
}

function getLocalUser() {
  return getKey(true, USER_INFO);
}

async function getMenuParentKey(key) {
  let parentKey;
  const res = await getMenus();
  res.data.some((menu) => {
    if (menu.key === key) {
      parentKey = key;
      return true;
    }
    if (Array.isArray(menu.children) && menu.children.length) {
      return menu.children.some((child) => {
        if (child.key === key) {
          parentKey = child.parentKey;
          return true;
        }
        return false;
      });
    }
    return false;
  });
  return parentKey;
}

function reduceMenuList(list) {
  return list.reduce((a, c) => {
    const { children, ...item } = c;
    a.push(item);
    if (children) {
      a.push(...c.children);
    }
    return a;
  }, []);
}
function mergeRouterMenuList(routerlist, menulist) {
  if (routerlist.length && menulist.length) {
    let praentList = [],
      childList = [];
    let list = reduceMenuList(menulist);
    list = list.map((item) => {
      const find = routerlist.find(
        (i) => i.path === (item.parentPath || "") + item.path
      );
      if (!find) {
        return item;
      }
      const { components, ...any } = find;
      return { ...any, ...item };
    });
    list.forEach((item) => {
      if (!item.menu_id) {
        return;
      }
      if (item.parentKey) {
        childList.push(item);
        return;
      }
      praentList.push(item);
    });
    childList.forEach((item) => {
      let find = praentList.find((p) => p.key === item.parentKey);
      if (!find) {
        return praentList.push(item);
      }
      item.parentPath = find.path;
      if (find.children) {
        return find.children.push(item);
      }
      find.children = [item];
    });
    return praentList;
  }
  return [];
}

function getLocalMenu() {
  return getKey(false, MENU);
}

function saveLocalMenu(menu) {
  setKey(false, MENU, menu);
}

function saveToken(token) {
  setKey(true, TOKEN, token);
}

function getToken() {
  return getKey(true, TOKEN);
}

function getKey(isLocal, key) {
  return JSON.parse(getStorage(isLocal).getItem(key) || "null");
}
function getStorage(isLocal) {
  return isLocal ? window.localStorage : window.sessionStorage;
}
function setKey(isLocal, key, data) {
  getStorage(isLocal).setItem(key, JSON.stringify(data || null));
}

function rmKey(isLocal, key) {
  getStorage(isLocal).removeItem(key);
}

function stopPropagation(e) {
  e.stopPropagation();
}

function getLayoutMode() {
  return getKey(true, "layout-mode");
}
function setLayoutMode(data) {
  setKey(true, "layout-mode", data);
}

/**
 * 删除的一组本地数据
 * @param {Array} keys 删除的一组本地数据的键值
 */
function clearLocalDatas(keys) {
  keys.forEach((key) => {
    rmKey(true, key);
    rmKey(false, key);
  });
}
function getCompVisibel() {
  return getKey(true, VISIBEL);
}
function setCompVisibel(val) {
  return setKey(true, VISIBEL, val);
}
export {
  getDefaultMenu,
  getSessionUser,
  saveUser,
  sleep,
  getLocalUser,
  getMenuParentKey,
  reduceMenuList,
  getLocalMenu,
  saveLocalMenu,
  saveToken,
  getToken,
  getKey,
  setKey,
  stopPropagation,
  getLayoutMode,
  setLayoutMode,
  clearLocalDatas,
  getCompVisibel,
  setCompVisibel,
  mergeRouterMenuList,
};