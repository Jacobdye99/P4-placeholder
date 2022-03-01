class ChangeReviews < ActiveRecord::Migration[7.0]
  def change
    change_column :reviews, :movie_id, :string
  end
end
