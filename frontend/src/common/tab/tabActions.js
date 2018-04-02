
export function selectTab(tabId){
    console.log(tabId);
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds){
    const tabsToshow = {};
    tabIds.forEach(element => tabsToshow[element] = true);
    return {
        type: 'TAB_SHOWED',
        payload: tabsToshow
    }
}