vim.cmd [[autocmd FileType * set formatoptions-=o]]
return {
   {
      'windwp/nvim-autopairs',
      event = "InsertEnter",
      opts = {},
   },
   {
    "williamboman/mason.nvim",
    opts={},
   },
   {
      'Mofiqul/dracula.nvim',
      opts = {},
   },
   {
      'nmac427/guess-indent.nvim',
      opts = {},
   },
   {
      'numToStr/Comment.nvim',
      opts = {},
   },
   {
      'ThePrimeagen/vim-be-good'
   },
   {
      'norcalli/nvim-colorizer.lua',
      opts = {},
   },
   {
      "nvim-neo-tree/neo-tree.nvim",
      version = "v2.x",
      cmd = 'Neotree',
      keys = {
      { "<leader>t", "<cmd>Neotree toggle<cr>", desc = "NeoTree" },
    },
      dependencies = {
         "nvim-lua/plenary.nvim",
         "MunifTanjim/nui.nvim",
      }
      
   }
}
