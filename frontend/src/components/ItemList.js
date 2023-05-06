import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const EmptyListMessage = (props) => {
  const style = {
    backgroundColor: 'lightpurple'
  };

  if (!props.searchText)
    return <div style={style} id="empty" className="py-4 no-items">No items here... yet</div>

  return <div style={style} id="empty text-center" className="py-4 px-2 no-items border">No items found for "<b>{props.searchText}</b>."</div>;
};

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    return <EmptyListMessage searchText={props.searchText} />
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
