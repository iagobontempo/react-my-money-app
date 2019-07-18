export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabsIds) {
    const tabsToShow = {}
    tabsIds.forEach(elem => tabsToShow[elem] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}