class LineItem < ActiveRecord::Base
  belongs_to :cart
  belongs_to :dish
  belongs_to :order
  
  def total_price
    self.quantity * self.dish.price
  end

  
end
