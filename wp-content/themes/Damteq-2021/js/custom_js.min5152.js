jQuery((function(t){t(document).ready((function(){t('a[href$=".pdf"]').attr("target","_blank")})),t(document).ready((function(){t("ul.products.columns-3").removeClass("dt_list_items"),t("ul.list_card_items .list_items").click((function(i){t("ul.products.columns-3").addClass("dt_list_items"),t("ul.list_card_items li").removeClass("active_item"),t("ul.list_card_items li:last-child()").addClass("active_item"),localStorage.setItem("list_item","item_checked")})),t("ul.list_card_items .card_items").click((function(i){t("ul.products.columns-3").removeClass("dt_list_items"),t("ul.list_card_items li").removeClass("active_item"),t("ul.list_card_items li:first-child()").addClass("active_item"),localStorage.setItem("list_item","")})),"item_checked"===localStorage.getItem("list_item")?(t("ul.products.columns-3").addClass("dt_list_items"),t("ul.list_card_items li").removeClass("active_item"),t("ul.list_card_items li:last-child()").addClass("active_item")):(t("ul.products.columns-3").removeClass("dt_list_items"),t("ul.list_card_items li").removeClass("active_item"),t("ul.list_card_items li:first-child()").addClass("active_item"))}))}));
//# sourceMappingURL=custom_js.min.js.map