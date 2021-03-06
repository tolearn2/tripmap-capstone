class Stop < ActiveRecord::Base
  validates :order, presence: true
  validates :stay_time, presence: true

  belongs_to :trip
  belongs_to :location

  default_scope { order(:order) }
end
