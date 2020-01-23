
class AddressesController < ApplicationController
  before_action :authenticate_user!
  def index
    @addresses = Address.where(:user_id => current_user)
  end

  def show
    @address = Address.find(params[:id])
  end

  def new
    @cart = @current_cart 
    @address = Address.new
    @user_address = Address.where(:user_id => current_user)
  end   
   
  def create 
    @cart = @current_cart
    @address = Address.new(address_params)
    y = params[:y]   
    if @address.save
      if params[:y] == '1'  
        respond_to do |format|
          format.html { redirect_to addresses_path, notice: 'Address succesfully created' }
        end
      end
      if params[:y] == '2'
        respond_to do |format|
          format.html { redirect_to checkout_address_path, notice: 'Address succesfully created' }
        end
      end 
    else   
      render :new   
    end   
  end  


  def edit 
    @address = Address.find(params[:id])   
  end 
   
  def update 
   @address = Address.find(params[:id])
   y = params[:y]
    
    if @address.update_attributes(address_params)   
      if params[:y] == '1'
        respond_to do |format|
          format.html { redirect_to addresses_path, notice: 'Address succesfully created' }
        end
      end
      if params[:y] == '2'
        respond_to do |format|
          format.html { redirect_to checkout_address_path, notice: 'Address succesfully created' }
        end
      end
    else     
      render :edit   
    end     
  end   

  def destroy
    @address = Address.find(params[:id])   
    @address.destroy
    respond_to do |format|
      format.html { redirect_to request.referrer, notice: 'address succesfully deleted' }
    end    
  end   

  private
  def address_params   
    params.require(:address).permit(:full_name, :mobile, :pincode, :house_no, :street, :landmark, :city, :state, :user_id)
  end   

end
