class CategoriesController < ApplicationController
  before_action :set_category, only: [:show]
  # GET /categories
  def index
    @categories = Category.all

    render json: @categories
  end

  def show
    render json: @category
  end

  def add_to_category
    @article = Article.find(params[:id])
    @category = Category.find(params[:category_id])

    @article.categories << category
  end
end
