const state = () => {
  return {
    menu: [
      "devider",
      {
        icon: "HomeIcon",
        pageName: "side-menu-dashboard-overview-1",
        title: "Overview",
      },
      {
        icon: "CalendarIcon",
        pageName: "side-menu-calendar",
        title: "Calendar"
      },
      {
        icon: "HardDriveIcon",
        pageName: "side-menu-file-manager",
        title: "All Notes"
      },
      {
        icon: "FileTextIcon",
        pageName: "side-menu-post",
        title: "Groups",
      },
    ]
  };
};

// getters
const getters = {
  menu: state => state.menu
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
